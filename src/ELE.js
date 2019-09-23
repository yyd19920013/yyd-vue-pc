import Vue from 'vue';
import {
    Row, //layout布局行
    Col, //layout布局列
    Radio, //单选框
    Checkbox, //多选框
    Input, //输入框
    Select, //选择器
    Cascader, //Select
    Switch, //开关
    Slider, //滑块
    TimeSelect, //时间选择器
    DatePicker, //日期选择器
    TimePicker, //日期时间选择器
    Upload, //上传文件
    Loading, //加载中
    Message, //顶部消息提示
    MessageBox, //消息弹框(确定或者带取消)
    Dropdown, //下拉菜单
    Dialog, //对话框
    Popover, //根据方向的弹出说明框
    Carousel, //轮播图
    CarouselItem, //轮播图子项
    Collapse, //折叠面板
    CollapseItem, //折叠面板子项
} from 'element-ui';

Vue.use(Row);
Vue.use(Col);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Input);
Vue.use(Select);
Vue.use(Cascader);
Vue.use(Switch);
Vue.use(Slider);
Vue.use(TimeSelect);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Upload);
Vue.use(Loading);
Vue.use(Dropdown);
Vue.use(Dialog);
Vue.use(Popover);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$messageBox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
