import md5 from 'vux/src/tools/md5/index.js';
import dateFormat from 'vux/src/tools/date/format.js';
import numberComma from 'vux/src/tools/number/comma.js';
import numberPad from 'vux/src/tools/number/pad.js';
import numberRandom from 'vux/src/tools/number/random.js';
import querystring from 'vux/src/tools/querystring/index.js';
import cookie from 'vux/src/tools/cookie/index.js';
import Qrcode from 'vux/src/components/qrcode/index.vue';

export{
	md5,//md5加密
	dateFormat,//日期格式化
	numberComma,//用于分割数字，默认为3位分割，一般用于格式化金额。
	numberPad,//用于按照位数补0
	numberRandom,//用于生成两个整数范围内的随机整数
	querystring,//url 参数解析
	cookie,//cookie插件
	Qrcode,//生产二维码
};
