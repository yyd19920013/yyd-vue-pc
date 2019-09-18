<template>
    <div
        class="richTextEdit"
        @keydown.ctrl.83.prevent="saveCode"
    >
        <ol class="handleWrap" ref="handleWrap">
            <li
                v-for="(item,index) in handleList"
                :title="item.title"
                :class="{
                    active:item.styleKey&&styleJson[item.styleKey]&&styleJson[item.styleKey]==item.styleValue,
                    active1:showPopupId==item.id,
                }"
            >
                <div
                    class="bt"
                    @click="selectHandle(item,index)"
                >
                    <span
                        :style="{
                            color:item.color,
                            backgroundColor:item.backgroundColor,
                        }"
                    >{{item.name}}</span>
                </div>

                <div class="popupWrap">
                    <!-- 文字颜色弹窗 -->
                    <div
                        v-show="showPopupId==item.id&&item.id=='4'"
                        class="popup1"
                    >
                        <span
                            v-for="item1 in colorList"
                            :class="{
                                active:styleJson['color']&&styleJson['color']==item1,
                            }"
                            @click="popupSelected('4','color',item1)"
                        >
                            <i
                                :style="{
                                    backgroundColor:item1,
                                }"
                                :title="item1"
                            >{{item1=='unset'?'无颜色':''}}</i>
                        </span>
                    </div>

                    <!-- 背景颜色弹窗 -->
                    <div
                        v-show="showPopupId==item.id&&item.id=='5'"
                        class="popup1"
                    >
                        <span
                            v-for="item1 in colorList"
                            :class="{
                                active:styleJson['background-color']&&styleJson['background-color']==item1,
                            }"
                            @click="popupSelected('5','background-color',item1)"
                        >
                            <i
                                :style="{
                                    backgroundColor:item1,
                                }"
                                :title="item1"
                            >{{item1=='unset'?'无颜色':''}}</i>
                        </span>
                    </div>

                    <!-- 行间距弹窗 -->
                    <ul
                        v-show="showPopupId==item.id&&item.id=='9'"
                        class="popup2"
                    >
                        <li
                            v-for="item1 in lineHeightList"
                            :class="{
                                active:styleJson['line-height']&&styleJson['line-height']==item1+'em',
                            }"
                            @click="popupSelected('9','line-height',item1+'em')"
                        >
                            <i
                                :style="{
                                    backgroundColor:item1,
                                }"
                                :title="item1"
                            >{{item1}}</i>
                        </li>
                    </ul>

                    <!-- 字间距弹窗 -->
                    <ul
                        v-show="showPopupId==item.id&&item.id=='10'"
                        class="popup2"
                    >
                        <li
                            v-for="item1 in lineHeightList"
                            :class="{
                                active:styleJson['letter-spacing']&&styleJson['letter-spacing']==item1+'px',
                            }"
                            @click="popupSelected('10','letter-spacing',item1+'px')"
                        >
                            {{item1}}
                        </li>
                    </ul>

                    <!-- 标题弹窗 -->
                    <ul
                        v-show="showPopupId==item.id&&item.id=='11'"
                        class="popup2"
                    >
                        <li
                            v-for="item1 in titleList"
                            @click="popupSelected('11',item1.value)"
                            :class="{
                                active:(styleJson['font-weight']&&styleJson['font-weight']==item1.value['font-weight'])&&(styleJson['font-size']&&styleJson['font-size']==item1.value['font-size']),
                            }"
                            :style="item1.value"
                        >
                            {{item1.name}}
                        </li>
                    </ul>

                    <!-- 字体弹窗 -->
                    <ul
                        v-show="showPopupId==item.id&&item.id=='12'"
                        class="popup2"
                    >
                        <li
                            v-for="item1 in fontFamiryList"
                            @click="popupSelected('12','font-family',item1.value)"
                            :class="{
                                active:styleJson['font-family']&&styleJson['font-family']==item1.value,
                            }"
                            :style="{
                                'font-family':item1.value,
                            }"
                        >
                            {{item1.name}}
                        </li>
                    </ul>

                    <!-- 文字大小弹窗 -->
                    <ul
                        v-show="showPopupId==item.id&&item.id=='13'"
                        class="popup2"
                    >
                        <li
                            v-for="item1 in fontSizeList"
                            :class="{
                                active:styleJson['font-size']&&styleJson['font-size']==item1,
                            }"
                            @click="popupSelected('13','font-size',item1)"
                        >
                            {{item1}}
                        </li>
                    </ul>

                    <!-- 网络图片弹窗 -->
                    <div
                        v-show="showPopupId==item.id&&item.id=='14'"
                        class="popup3 id14"
                    >
                        <div class="title">
                            网络图片
                        </div>
                        <ul class="main">
                            <li>
                                <span>图片地址</span>
                                <input v-model="oImgParams.src" type="url" />
                            </li>
                            <li>
                                <span>图片大小</span>
                                <div class="imgSize">
                                    宽<input v-model="oImgParams.width" type="url" />
                                    高<input v-model="oImgParams.height" type="url" />
                                </div>
                            </li>
                            <li>
                                <span>对齐方式</span>
                                <div class="align">
                                    <label for="alignLeft">
                                        左<input v-model="oImgParams.align" value="left" type="radio" id="alignLeft" />
                                    </label>
                                    <label for="alignCenter">
                                        中<input v-model="oImgParams.align" value="center" type="radio" id="alignCenter" />
                                    </label>
                                    <label for="alignRight">
                                        高<input v-model="oImgParams.align" value="right" type="radio" id="alignRight" />
                                    </label>
                                </div>
                            </li>
                            <li>
                                <span>图片说明</span>
                                <input v-model="oImgParams.desc" type="text" />
                            </li>
                        </ul>
                        <div class="end">
                            <button
                                type="button"
                                @click="uploadOImg"
                            >确定</button>
                            <button
                                type="button"
                                @click="showPopupId=-1"
                            >取消</button>
                        </div>
                    </div>

                    <!-- 本地图片弹窗 -->
                    <div
                        v-show="showPopupId==item.id&&item.id=='15'"
                        class="popup3 id15"
                    >
                        <div class="title">
                            本地图片
                        </div>
                        <ul class="main">
                            <li>
                                <span>上传图片</span>
                                <input v-model="iImgParams.prevSrc" type="url" />
                                <button type="button">
                                    浏览
                                    <label class="labelFor" for="upLoad">
                                        <input
                                            type="file"
                                            id="upLoad"
                                            @change="upLoadChange($event)"
                                        />
                                    </label>
                                </button>
                            </li>
                        </ul>
                        <div class="end">
                            <button
                                type="button"
                                @click="uploadIImg"
                            >确定</button>
                            <button
                                type="button"
                                @click="showPopupId=-1"
                            >取消</button>
                        </div>
                    </div>

                    <!-- 链接弹窗 -->
                    <div
                        v-show="showPopupId==item.id&&item.id=='16'"
                        class="popup3"
                    >
                        <div class="title">
                            超级链接
                        </div>
                        <ul class="main">
                            <li>
                                <span>URL</span>
                                <input v-model="linkName" type="url" />
                            </li>
                            <li>
                                <span>打开类型</span>
                                <select v-model="linkType">
                                    <option value="">当前窗口</option>
                                    <option value="_blank">新窗口</option>
                                </select>
                            </li>
                        </ul>
                        <div class="end">
                            <button
                                type="button"
                                @click="createLink"
                            >确定</button>
                            <button
                                type="button"
                                @click="showPopupId=-1"
                            >取消</button>
                        </div>
                    </div>
                </div>
            </li>
        </ol>
        <div
            v-if="showPopupId!='20'"
            contenteditable="true"
            class="editWrap"
            ref="editWrap"
            @keydown.9.prevent="tableToBlank"
        ></div>

        <!-- html弹窗 -->
            <textarea
                v-else
                class="textareaWrap"
                v-model="htmlCode"
            ></textarea>

        <div class="buttonWrap">
            <button
                type="button"
                @click="confirmFn"
            >确定编辑</button>
        </div>
    </div>
</template>

<script>
    import {Type,isPhone,bind,unbind,selectText,execCommandFn,firstChild,lastChild,lStore,imgFilesToBase64,axiosWrap} from 'js/yydjs';

    export default{
        data(){
            let richTextEditCode=lStore.get('richTextEditCode');

            return{
                richTextEditCode,
                handleList:[
                    {
                        id:'1',
                        name:'B',
                        title:'加粗',
                        styleKey:'font-weight',
                        styleValue:'bold',
                    },
                    {
                        id:'2',
                        name:'I',
                        title:'斜体',
                        styleKey:'font-style',
                        styleValue:'italic',
                    },
                    {
                        id:'3',
                        name:'U',
                        title:'下划线',
                        styleKey:'text-decoration',
                        styleValue:'underline',
                    },
                    {
                        id:'4',
                        name:'A',
                        title:'文字颜色',
                        color:'#ffa500',
                        hasPopup:true,
                    },
                    {
                        id:'5',
                        name:'A',
                        title:'文字背景',
                        backgroundColor:'#ffa500',
                        hasPopup:true,
                    },
                    {
                        id:'6',
                        name:'L',
                        title:'居左对齐',
                        styleKey:'text-align',
                        styleValue:'left',
                    },
                    {
                        id:'7',
                        name:'C',
                        title:'居中对齐',
                        styleKey:'text-align',
                        styleValue:'center',
                    },
                    {
                        id:'8',
                        name:'R',
                        title:'居右对齐',
                        styleKey:'text-align',
                        styleValue:'right',
                    },
                    {
                        id:'9',
                        name:'≡',
                        title:'行间距',
                        hasPopup:true,
                    },
                    {
                        id:'10',
                        name:'|A|',
                        title:'字间距',
                        hasPopup:true,
                    },
                    {
                        id:'11',
                        name:'H1',
                        title:'标题',
                        hasPopup:true,
                    },
                    {
                        id:'12',
                        name:'F',
                        title:'字体',
                        hasPopup:true,
                    },
                    {
                        id:'13',
                        name:'tT',
                        title:'文字大小',
                        hasPopup:true,
                    },
                    {
                        id:'14',
                        name:'oImg',
                        title:'网络图片',
                        hasPopup:true,
                    },
                    {
                        id:'15',
                        name:'lImg',
                        title:'本地图片',
                        hasPopup:true,
                    },
                    {
                        id:'16',
                        name:'∞',
                        title:'链接',
                        hasPopup:true,
                    },
                    {
                        id:'17',
                        name:'∽',
                        title:'取消链接',
                        hasPopup:true,
                    },
                    {
                        id:'18',
                        name:'clear',
                        title:'清理格式',
                    },
                    {
                        id:'19',
                        name:'clearA',
                        title:'全部清理',
                    },
                    {
                        id:'20',
                        name:'html',
                        title:'html代码',
                        hasPopup:true,
                    },
                ],
                colorList:[
                    'unset',
                    'rgb(229, 51, 51)','rgb(229, 102, 0)','rgb(255, 153, 0)','rgb(100, 69, 29)','rgb(223, 197, 164)','rgb(255, 229, 0)',
                    'rgb(0, 153, 0)','rgb(0, 102, 0)','rgb(153, 187, 0)','rgb(187, 209, 0)','rgb(96, 217, 120)','rgb(0, 213, 255)',
                    'rgb(51, 127, 229)','rgb(0, 51, 153)','rgb(76, 51, 229)','rgb(153, 51, 229)','rgb(204, 51, 229)','rgb(238, 51, 238)',
                    'rgb(255, 255, 255)','rgb(204, 204, 204)','rgb(153, 153, 153)','rgb(102, 102, 102)','rgb(51, 51, 51)','rgb(0, 0, 0)',
                ],
                lineHeightList:[
                    '1','1.5','1.75','2','2.5','3','4','5'
                ],
                letterSpacingList:[
                    '0','0.25','0.5','1','1.5','2','2.5','3','4','5'
                ],
                titleList:[
                    {
                        name:'标题1',
                        value:{
                            'font-size':'24px',
                            'font-weight':'bold',
                        },
                    },
                    {
                        name:'标题2',
                        value:{
                            'font-size':'18px',
                            'font-weight':'bold',
                        },
                    },
                    {
                        name:'标题3',
                        value:{
                            'font-size':'16px',
                            'font-weight':'bold',
                        },
                    },
                    {
                        name:'标题4',
                        value:{
                            'font-size':'14px',
                            'font-weight':'bold',
                        },
                    },
                    {
                        name:'正文',
                        value:{
                            'font-size':'14px',
                        },
                    },
                ],
                fontFamiryList:[
                    {
                        name:'宋体',
                        value:'SimSun',
                    },
                    {
                        name:'新宋体',
                        value:'NSimSun',
                    },
                    {
                        name:'仿宋',
                        value:'FangSong_GB2312',
                    },
                    {
                        name:'楷体',
                        value:'KaiTi_GB2312',
                    },
                    {
                        name:'黑体',
                        value:'SimHei',
                    },
                    // {
                    //     name:'微软雅黑',
                    //     value:'Microsoft YaHei',
                    // },
                    {
                        name:'Arial',
                        value:'Arial',
                    },
                ],
                fontSizeList:[
                    '8px','10px','12px','14px','16px','18px','24px','32px'
                ],
                styleJson:{},
                selectRes:{},
                nodeList:[],
                showPopupId:'-1',
                oImgParams:{
                    src:'',
                    width:'auto',
                    height:'auto',
                    align:'left',
                    title:'',
                },
                iImgParams:{
                    src:'',
                    base64:'',
                    prevSrc:'',
                },
                linkName:'http://',
                linkType:'',
                htmlCode:'',
            }
        },

        /*
            <richTextEdit
                :confirm="confirm"
            />
        */

        props:{
            api:{//上传图片需要用到的api，只接受第一个参数为params，第二个参数为回调函数，回调函数回参为上传图片得到的地址
                type:Function,
                default:(params,success)=>{
                    axiosWrap({
                        url:'/yangyd/myBackground/ports/uploadImgBase64.php',
                        params,
                        method:'post',
                        code:'0',
                        success:(res)=>{
                            if(res.data){
                                let {imgSrc}=res.data;

                                if(~imgSrc.indexOf('localhost')){
                                    imgSrc=imgSrc.split('/');
                                    imgSrc.splice(0,3);
                                    imgSrc='http://yangyd.cn/'+imgSrc.join('/');
                                }
                                success&&success(imgSrc);
                            }
                        },
                    });
                },
            },
            params:{//上传图片需要用到的参数
                type:Object,Array,
                default:null,
            },
            imgChange:{//选择图片改变时触发的函数
                type:Function,
                default:(res)=>{},
            },
            confirm:{//点击确定触发的回调函数，会回传富文本的html代码
                type:Function,
                default:(res)=>{},
            },
        },

        mounted(){
            //从本地存储里取富文本
            this.getRichTextEditCode();

            //绑定事件
            this.bindEvent();
        },

        beforeDestroy(){
            unbind(document,'mouseup',this.getSelectRes);
            unbind(document,'touchend',this.getSelectRes);
            unbind(document,'click',this.closePopup);
        },

        methods:{
            changeStyle(styleKey,styleValue){
                let {styleJson}=this;

                if(!styleJson[styleKey]||styleJson[styleKey]&&styleJson[styleKey]!=styleValue){
                    styleJson[styleKey]=styleValue;
                }else{
                    delete styleJson[styleKey];
                }
                this.styleJson=Object.assign({},styleJson);
            },
            changeSelectedStyle(json){
                let {styleJson}=this;

                for(let attr in json){
                    styleJson[attr]=json[attr];
                }

                for(let attr in styleJson){
                    if(!json[attr]){
                        delete styleJson[attr];
                    }
                }

                this.styleJson=Object.assign({},styleJson);
            },
            renderStyle(styleKey,styleValue){
                let {selectRes}=this;
                let {text,wrapTag}=selectRes;

                if(!text.length){
                    this.changeStyle(styleKey,styleValue);
                }else{
                    this.changeStyle(styleKey,styleValue);
                    wrapTag('span',false,this.styleJson);
                }
            },
            closePopup(ev){
                var ev=ev||window.event;
                let {target}=ev;
                let {handleWrap}=this.$refs;

                if(!handleWrap.contains(target)&&this.showPopupId!='-1'&&this.showPopupId!='20'){
                    this.showPopupId='-1';
                }
            },
            tableToBlank(){
                execCommandFn('4_1','&nbsp;&nbsp;&nbsp;&nbsp;');
            },
            createLink(){
                let {selectRes,linkName,linkType}=this;
                let {text,wrapTag}=selectRes;

                wrapTag('a',false,{'color':'#337fe5','text-decoration':'underline'},{href:linkName,target:linkType,innerText:!text?linkName:''});
                this.showPopupId='-1';

            },
            getRichTextEditCode(){
                let {editWrap}=this.$refs;

                if(this.richTextEditCode){
                    editWrap.innerHTML=this.richTextEditCode;
                }
            },
            bindEvent(){
                if(!isPhone()){
                    bind(document,'mouseup',this.getSelectRes);
                }else{
                    bind(document,'touchend',this.getSelectRes);
                }
                bind(document,'click',this.closePopup);
            },
            getSelectRes(){
                selectText((res)=>{
                    let {editWrap}=this.$refs;
                    let {text,getNodeList,getCssText}=res;

                    this.selectRes=res;
                    if(text.length){
                        let nodeList=getNodeList(editWrap);
                        let allStyleJson={};

                        this.nodeList=nodeList;

                        for(let item of nodeList){
                            allStyleJson=Object.assign({},allStyleJson,getCssText(item.parentElement));
                        }

                        this.changeSelectedStyle(allStyleJson);
                    }else{
                        this.styleJson={};
                    }
                });
            },
            selectHandle(item,index){
                let {editWrap}=this.$refs;
                let {selectRes,styleJson,nodeList}=this;
                let {selectedObj,text,wrapTag}=selectRes;
                let {id,styleKey,styleValue,hasPopup}=item;

                if(styleKey){
                    this.renderStyle(styleKey,styleValue);
                }else{
                    if(hasPopup){
                        if(this.showPopupId==-1||this.showPopupId!=id){
                            this.showPopupId=id;
                        }else{
                            this.showPopupId=-1;
                        }
                    }

                    switch(id){
                        case '16':
                                this.showPopupId='16';
                            break;
                        case '17':
                                execCommandFn('3_7');
                                execCommandFn('4_9');
                            break;
                        case '18':
                                execCommandFn('3_7');
                            break;
                        case '19':
                                execCommandFn('3_4');
                                execCommandFn('3_7');
                                selectedObj.removeAllRanges();
                            break;
                        case '20':
                                if(this.showPopupId=='20'){
                                    this.htmlCode=editWrap.innerHTML;
                                }else{
                                    setTimeout(()=>{
                                        this.$refs.editWrap.innerHTML=this.htmlCode;
                                    });
                                }
                            break;
                    }
                }
            },
            popupSelected(id,styleKey,styleValue){
                if(this.showPopupId!=-1){
                    this.showPopupId=-1;
                    if(Type(styleKey)=='object'){
                        let styleObj=styleKey;

                        for(let attr in styleObj){
                            this.renderStyle(attr,styleObj[attr]);
                        }
                    }else{
                        this.renderStyle(styleKey,styleValue);
                    }
                }
            },
            upLoadChange(ev){
                let {imgChange}=this;
                let file=ev.currentTarget.files[0];

                imgFilesToBase64([file],(res)=>{
                    if(res.length){
                        let {base64,prevSrc}=res[0];

                        this.iImgParams.base64=base64;
                        this.iImgParams.prevSrc=prevSrc;
                        imgChange&&imgChange({
                            file,
                            base64,
                            prevSrc,
                        });
                    }
                });
            },
            uploadOImg(){
                let {selectRes}=this;
                let {wrapTag}=selectRes;
                let oImgParams=Object.assign(this.oImgParams);

                if(oImgParams.width=='auto')delete oImgParams.width;
                if(oImgParams.height=='auto')delete oImgParams.height;
                wrapTag('img',true,{},oImgParams);
                this.showPopupId='-1';
            },
            uploadIImg(){
                let defaultParams='post='+JSON.stringify({
                        base64:encodeURIComponent(this.iImgParams.base64),
                    });
                let {api,params,selectRes}=this;
                let {wrapTag}=selectRes;

                params=params||defaultParams;
                api(params,(res)=>{
                    this.iImgParams.src=res;
                    wrapTag('img',true,{},{src:res});
                    this.showPopupId='-1';
                });
            },
            getHtmlCode(){
                let result='';
                let {editWrap}=this.$refs;

                if(editWrap&&editWrap.innerHTML){
                    result=editWrap.innerHTML;
                }else{
                    result=this.htmlCode;
                }
                return result;
            },
            saveCode(){
                lStore.set('richTextEditCode',this.getHtmlCode());
            },
            confirmFn(){
                let {confirm}=this;

                confirm&&confirm(this.getHtmlCode());
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '~css/public.scss';

    .richTextEdit{
        max-width: 768px;
        border: 1px solid #ddd;
        font-size: 14px;
        .handleWrap{
            border-bottom: 1px solid #ddd;
            user-select: none;
            background-color: #fff;
            zoom:1;
            &:after{
                content:"";
                display:block;
                clear:both;
            }
            >li{
                float: left;
                width: 10%;
                padding: 5px;
                height: 30px;
                text-align: center;
                font-size: 8px;
                cursor: pointer;
                position: relative;
                .bt{
                    display: block;
                    padding: 2px 0;
                    height: 100%;
                    border: 1px solid transparent;
                    span{
                        display: inline-block;
                        min-width: 16px;
                        height: 100%;
                        line-height: 14px;
                    }
                }
                &:hover .bt{
                    background-color: #eee;
                }
                &.active .bt{
                    border-color: #ffa500;
                }
                &.active1 .bt{
                    font-weight: bold;
                }
                .popupWrap{
                    position: absolute;
                    left: 0;
                    top: 30px;
                    z-index: 10;
                    border: 1px solid #ddd;
                    text-align: left;
                    .popup1{
                        width: 180px;
                        background-color: #f1f1f1;
                        overflow: hidden;
                        span{
                            float: left;
                            width: 30px;
                            padding: 5px;
                            height: 30px;
                            border: 1px solid transparent;
                            i{
                                display: block;
                                height: 100%;
                            }
                            &:first-of-type{
                                width: 100%;
                                padding: 0;
                                height: 30px;
                                line-height: 30px;
                                text-align: center;
                            }
                            &:hover,&.active{
                                border-color: #ffa500;
                            }
                        }
                    }
                    .popup2{
                        width: 120px;
                        background-color: #f1f1f1;
                        overflow: hidden;
                        li{
                            height: 20px;
                            line-height: 20px;
                            text-align: center;
                            border: 1px solid transparent;
                            &:hover,&.active{
                                border-color: #ffa500;
                            }
                        }
                    }
                    .popup3{
                        width: 200px;
                        padding: 10px;
                        background-color: #f1f1f1;
                        overflow: hidden;
                        font-size: 10px;
                        .title{
                            line-height: 20px;
                            font-weight: bold;
                        }
                        .main{
                            li{
                                padding: 5px 0;
                                line-height: 20px;
                                overflow: hidden;
                                >span{
                                    float: left;
                                    width: 50px;
                                }
                                >input{
                                    float: left;
                                    max-width: 120px;
                                    padding: 0 5px;
                                    margin-right: 10px;
                                    height: 20px;
                                    border: 1px solid #ddd;
                                }
                                >select{
                                    width: 120px;
                                    height: 20px;
                                    border: 1px solid #ddd;
                                }
                                >button{
                                    height: 20px;
                                     font-size: 12px;
                                }
                            }
                        }
                        .end{
                            padding-top: 20px;
                            text-align: right;
                            button{
                                padding: 0 10px;
                                margin: 0 5px;
                                height: 20px;
                            }
                        }
                         &.id14{
                            .main{
                                li{
                                    .imgSize{
                                        input{
                                            width: 40px;
                                            padding: 0 5px;
                                            margin: 0 5px;
                                            height: 20px;
                                            border: 1px solid #ddd;
                                        }
                                    }
                                    .align{
                                        input{
                                            margin-right: 5px;
                                        }
                                    }
                                }
                            }
                        }
                        &.id15{
                            .main{
                                li{
                                    input{
                                        max-width: 80px;
                                    }
                                    button{
                                        position: relative;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .editWrap{
            color: #000;
            min-height: 300px;
            padding: 10px;
            outline: none;
            background-color: #fff;
            overflow-x: auto;
            /deep/ img{
                &:before{
                    display: none;
                }
            }
        }
        .textareaWrap{
            vertical-align:top;
            width: 100%;
            color: #000;
            height: 300px;
            padding: 10px;
            background-color: #fff;
            border: none;
            overflow-y: auto;
        }
        .buttonWrap{
            button{
                width: 100%;
                height: 40px;
                line-height: 40px;
                text-align: center;
                border:none;
                font-size: 14px;
                letter-spacing: 2px;
                text-indent: 2px;
                user-select: none;
                cursor: pointer;
            }
        }
    }
</style>