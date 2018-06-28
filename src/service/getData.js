import $ from 'jquery';
import vm from 'src/main.js';
import {md5} from 'vux';
import {cookie,alerts,strToJson} from 'js/yydjs.js';

const URL='/api';//域名

//headers字段
let [timestamp,token,secret]=[
		((+new Date())/1000).toFixed(0),
		cookie.get('AccessToken'),
		cookie.get('AccessSecret'),		
	];
let sign=md5(timestamp+token+secret);
//更新headers字段
const updataSign=function(){
	[timestamp,token,secret]=[
		((+new Date())/1000).toFixed(0),
		cookie.get('AccessToken'),
		cookie.get('AccessSecret'),		
	];
	sign=md5(timestamp+token+secret);
	//console.log('timestamp='+timestamp+'&token='+token+'&sign='+sign);
};

//首页信息
const homePageInfo=function(endFn){
	$.ajax({
		url:URL+'/action2/HomePageInfo.ashx',	   
		data:'',
		type:'POST',
		dataType:'json',
		success:function(data){
			endFn&&endFn(data);
		}
	});
};

//获取车辆品牌
const carBrand=function(endFn){
	$.ajax({
		url:URL+'/action2/CarBrand.ashx',	   
		data:'',
		type:'POST',
		dataType:'json',
		success:function(data){
			endFn&&endFn(data);
		}
	});
};

//根据品牌获取车系
const carSeries=function(json,endFn){
	$.ajax({
		url:URL+'/action2/CarSeries.ashx',	   
		data:json,
		type:'POST',
		dataType:'json',
		success:function(data){
			endFn&&endFn(data);
		}
	});
};

//根据车系获取车型
const carModel=function(json,endFn){
	$.ajax({
		url:URL+'/action2/CarModel.ashx',	   
		data:json,
		type:'POST',
		dataType:'json',
		success:function(data){
			endFn&&endFn(data);
		}
	});
};

//所有省份
const allProvince=function(endFn){
	$.ajax({
		url:URL+'/action2/AllProvince.ashx',	   
		data:'',
		type:'POST',
		dataType:'json',
		success:function(data){
			endFn&&endFn(data);
			if(allProvince.resolve)return allProvince.resolve(data);
		}
	});
};

//所有省份的城市
const cityForProvince=function(json,endFn){
	$.ajax({
		url:URL+'/action2/CityForProvince.ashx',	   
		data:json,
		type:'POST',
		dataType:'json',
		success:function(data){
			endFn&&endFn(data);
		}
	});
};

//所有省市
const allCity=function(endFn){
	$.ajax({
		url:URL+'/action2/AllCity.ashx',	   
		data:'',
		type:'POST',
		dataType:'json',
		success:function(data){
			endFn&&endFn(data);
			if(allCity.resolve)return allCity.resolve(data);
		}
	});
};

//统一支付接口封装
const payB2BCreditPoint=function(json,successUrl,failUrl){
	updataSign();
	var arr=[
				'/defaultPage/paySuccess',//支付成功
				'/defaultPage/payFail',//支付失败
	];
	if(json.payType=='balance'){//余额支付
		var json1={};

		json1.PayType=json.amountType;
		json1.PayPwd=json.payPwd;
		json1.OrderId=json.orderId;
		json1.PayAmount=json.payAmount;
		//console.log(json1);
		blancePay(json1,function(data){
			//console.log(data);
			vm.$vux.alert.show({
			  title:'提示！',
			  content:data.msg,
			  onHide(){
			  	if(data.code==0){
					window.location.href=successUrl||'/mo1/?#'+arr[0];
				}else{
					window.location.href=failUrl||'/mo1/?#'+arr[1];
				}
			  }
			});					
		});
	}
	if(json.payType=='alipay'){//支付宝支付
		var url=URL+'/action2/pay/payB2BCreditPoint.ashx?token='+token+'&timestamp='+timestamp+'&sign='+sign+'&payType='+json.payType+'&payAmount='+json.payAmount+'&amountType='+json.amountType+'&orderId='+json.orderId;
		window.location.href=url;
	}
	if(json.payType=='wxpay_jsapi'){//微信支付
		var hash=window.location.hash;
		var path=hash.substring(1,hash.indexOf('?')!=-1?hash.indexOf('?'):hash.length);
		var url='https://www.muyouche.com/static/WXZF.html?json={"orderId":"'+json.orderId+'","payAmount":"'+json.payAmount+'","amountType":"'+json.amountType+'","origin":"'+window.location.origin+'","path":"'+path+'"}';
		getOpenId(url,function(data){
			//console.log(data);
			json.openid=cookie.get('yydOpenId');
			//console.log(json);
			
			/*微信支付后端集成后数据接口*/
			$.ajax({
				headers:{timestamp:timestamp,token:token,sign:sign},
				url:URL+'/action2/pay/payB2BCreditPoint.ashx',
				data:JSON.stringify(json),
				type:'POST',
				dataType:'json',
				success:function(data1){
					//console.log(data1);
					if(data1.code==0){
						json.appId=data1.data.appId;
						json.timeStamp=data1.data.timeStamp;
						json.nonceStr=data1.data.nonceStr;
						json.package=data1.data.package;
						json.signType=data1.data.signType;
						json.paySign=data1.data.paySign;
						json.url=successUrl||'/mo1/?#'+arr[0];										
						WXFZ(json);
					}else{
						vm.$vux.alert.show({
						  title:'提示！',
						  content:data1.msg,
						  onHide(){
						  	window.location.href=failUrl||'/mo1/?#'+arr[1];
						  }
						});	
					}
				}
			});
		});	
	}
	//农行支付或银联支付
	if(json.payType=='abc'||json.payType=='union_pay'){
		var url1=URL+'/action2/pay/payB2BCreditPoint.ashx?token='+token+'&timestamp='+timestamp+'&sign='+sign+'&payType='+json.payType+'&payAmount='+json.payAmount+'&amountType='+json.amountType+'&orderId='+json.orderId+'&clientType='+json.clientType||2;
		window.location.href=url1;
	}
};

/*获取微信openId*/
const getOpenId=function(url,endFn){
	//获得微信基本权限的code（无需授权）
	var snsapi_base='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd9b3d678e7ae9181&redirect_uri='+url+'&response_type=code&scope=snsapi_base#wechat_redirect';
	
	//获得微信最高权限的code（需要授权）
	var snsapi_userinfo='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd9b3d678e7ae9181&redirect_uri='+url+'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
	
	//如果在本地存储中没有发现openId再进行获取操作
	if(!cookie.get('yydOpenId')){
		if(!window.location.href.match('code=')){
			window.location.href=snsapi_base;	
		}else{
			var json={};
			var str=window.location.href;
			
			json.wxcode=strToJson(str.substr(str.indexOf('?')+1,str.length)).code;
			json.appid='wxd9b3d678e7ae9181';
			//console.log(json);
			$.ajax({
				url:URL+'/action/GetWXOpenID.ashx',	   
				data:json,
				type:'POST',
				dataType:'json',
				success:function(data){
					if(data.code=='sucess'){
						cookie.set('yydOpenId',data.openid);
					}
					endFn&&endFn(data);
				}
			});
		}
	}else{
		endFn&&endFn();
	}
};

/*微信内置对象封装*/
const WXFZ=function(json,endFn){
	function onBridgeReady(){
	   WeixinJSBridge.invoke(
	       'getBrandWCPayRequest',{
	           "appId":json.appId,     			    //公众号名称，由商户传入     
	           "timeStamp":json.timeStamp,          //时间戳，自1970年以来的秒数     
	           "nonceStr":json.nonceStr, 			//随机串     
	           "package":json.package,     
	           "signType":json.signType,         	//微信签名方式：     
	           "paySign":json.paySign 				//微信签名 
	       },
	       function(res){ 
				//使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
	           if(res.err_msg=='get_brand_wcpay_request:ok') {    
	           		vm.$vux.alert.show({
					  title:'提示！',
					  content:'微信支付成功！',
					  onHide(){
					  	window.location.href=json.url;	
					  }
					});	
	           }else{
	           		vm.$vux.alert.show({
					  title:'提示！',
					  content:'微信支付失败，请重试！',
					  onHide(){
					  	
					  }
					});	
	           }
	           endFn&&endFn(res);
	       }
	   ); 
	}
	if(typeof WeixinJSBridge=="undefined"){
	   if(document.addEventListener){
	       document.addEventListener('WeixinJSBridgeReady',onBridgeReady,false);
	   }else if(document.attachEvent){
	       document.attachEvent('WeixinJSBridgeReady',onBridgeReady); 
	       document.attachEvent('onWeixinJSBridgeReady',onBridgeReady);
	   }
	}else{
	   onBridgeReady();
	} 
};

//vue上拉加载插件
//This(vue对象)
//apiFn(获取数据的函数)
//json(提交给apiFn的json)
//list(vue对象里要改变的数组名字'')
//endFn1(第一次获取到数据后的回调，只走一次)
//endFn2(每次上拉加载完毕数据的回调函数)
//dataName(接口中数据的名字，默认是data)
//path(如果传入的path与当前的path相同，就不会触发hashchange清除scroll事件)
//iDis(上拉加载时，列表的位置会加上这个距离作为上拉位置的判断)
//以下是样式代码
// <div class="loading">
// 	<span>正在加载中...</span>
// 	<em>全部加载完毕...</em>
// </div>
// .loading{ width: 100%; height: 50px; line-height: 50px; text-align: center; background-color: #fff; position:relative; display: none;}
// .loading span,.loading em{ display: block; width: 120px; margin: 0 auto;  color: #666; font-size: 12px; display: none;}
// .loading span{ padding-left: 40px; background:url('/static/images/loading.gif') no-repeat 5px center; background-size:30px;}
// .loading.active,.loading.active1{ display: block;}
// .loading.active span{ display: block;}
// .loading.active1 em{ display: block;}
const pullLoading=function(This,apiFn,json,list,endFn1,endFn2,dataName,path,iDis){
	//json克隆副本
	function Json(json){
		return JSON.parse(JSON.stringify(json));
	};
	var loadOver=true;
	var getList=function(endFn,endFn1){			
		apiFn(json,function(data){	
			console.log(data);	
			endFn1&&endFn1(data);							
			setTimeout(function(){
				loadOver=true;
			},300);	

			//加载完毕回调函数	
			if(endFn2){
				endFn2(endFn,data);
			}else{
				if(dataName){
					if(!data[dataName].length){
						endFn&&endFn();
						return;
					}
					This[list]=This[list].concat(Json(data[dataName]));					
				}else{
					if(!data.data.length){
						endFn&&endFn();
						return;
					}				
					This[list]=This[list].concat(Json(data.data));
				}			
			}	
		});
	};
	getList(null,endFn1);
	
	$(document).on('scroll',scroll);
	function scroll(){
		var iSH=$(document).scrollTop()+document.documentElement.clientHeight;
		//有个报错
		if($('.option.active').offset()){
			var iEH=$('.option.active').offset().top+$('.option.active').height()+(iDis||0);
		}				
		
		if(iSH>=iEH&&loadOver){ 	
			$('.loading').addClass('active');

			json.PageIndex+=1;	
			json.nowpage+=1;//一期排行榜的页码	
			if(loadOver){
				loadOver=false;
				getList(function(){		
					$('.loading').addClass('active1');
				},null,endFn2);
			}		
		}
	}

	$(document).on('touchend',touchend);
	function touchend(){
		$('.loading').removeClass('active');
		$('.loading').removeClass('active1');
	}

	$(window).on('hashchange',function(){
		if(This.$router.currentRoute.path!=path){
			$(document).off('scroll',scroll);
			$(document).off('touchend',touchend);
		}	
	});
};

//微信分享
// json{
//     title: '', // 分享标题
//     desc: '', // 分享描述	
//     imgUrl: '', // 分享图标
//     link: '', // 分享链接，默认地址
//     success: function () { //默认
//        // 用户确认分享后执行的回调函数
//     },
//     cancel: function () { //默认
//        // 用户取消分享后执行的回调函数
//     }
// }
function wxShare(json){
	$.getScript('https://res.wx.qq.com/open/js/jweixin-1.2.0.js',function(){
		var json1={};

		json1.url=window.location.href.split('#')[0];
		var arr=[
			    	'onMenuShareTimeline',
					'onMenuShareAppMessage',
					'onMenuShareQQ',
					'onMenuShareWeibo',
					'onMenuShareQZone'
				];
		wxJsApiSign(json1,function(data){
			//console.log(data);	
			var data=data.data||{};

			wx.config({
			    debug: false, // 开启调试模式,仅在pc端时才会打印。
			    appId: data.appId||'appId', // 必填，公众号的唯一标识
			    timestamp: data.timestamp||'timestamp', // 必填，生成签名的时间戳
			    nonceStr: data.nonceStr||'nonceStr', // 必填，生成签名的随机串
			    signature: data.signature||'signature',// 必填，签名，见附录1
			    jsApiList: [].concat(arr) // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			});	
		});

		wx.checkJsApi({
		    jsApiList: [].concat(arr), // 需要检测的JS接口列表，所有JS接口列表见附录2,
		    success: function(res) {
		        // 以键值对的形式返回，可用的api值true，不可用为false
		        console.log('可用接口',res);
		    }
		});				

		var json2={
	    	title: '分享标题', // 分享标题
	    	desc: '分享内容', // 分享内容	   
		    imgUrl: window.location.origin+'/static/images/logoBg.png', // 分享图标
		    link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		    success: function () { 
		        // 用户确认分享后执行的回调函数
		        console.log('成功');
		    },
		    cancel: function () { 
		        // 用户取消分享后执行的回调函数
		        console.log('失败');
		    }	
	    };

	    if(json){
	    	for(var attr in json){
	    		console.log(attr,json[attr]);
	    		json2[attr]=json[attr];
	   		}
	    }

		wx.ready(function(){
		    for(var i=0;i<arr.length;i++){
		    	wx[arr[i]](json2);
		    } 
		});
		wx.error(function(res){
		    console.log('错误',res);
		});			
	});	
};

export{
		URL,//域名
		homePageInfo,//首页信息
		carBrand,//获取车辆品牌
		carSeries,//根据品牌获取车系
		carModel,//根据车系获取车型
		allProvince,//所有省份
		cityForProvince,//所有省份的城市
		allCity,//所有省市
		payB2BCreditPoint,//统一支付接口封装
		getOpenId,//获取微信openId
		pullLoading,//上拉加载函数
		wxShare,//微信分享封装
	};