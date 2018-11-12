<template>
    <div
        :class="{
            departmentPicker:true,
            active:parent[showName],
        }"
        :style="{
            top:(44+statusBarHeight) + 'px',
            borderBottomWidth:(44+statusBarHeight) + 'px',
        }"
    >
        <div class="title">
            <a
                @click="closeFn(false)"
            >取消</a>
            <h2>选择科室</h2>
        </div>

        <div class="main">
            <div class="list">
                <ul>
                    <li
                        v-for="(item,index) in list"
                        @click="pickList(item,index)"
                        :class="{
                            active:insideCIndex==index,
                        }"
                    >
                        {{item.stardardDeptName}}
                    </li>
                </ul>
            </div>

            <div class="list1">
                <ul>
                    <li
                        v-for="(item,index) in list1"
                        @click="pickList1(item,index,true)"
                        :class="{
                            active:insideCIndex1==index,
                        }"
                    >
                        {{item.stardardDeptName}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {getFirstDeptList,getSecondDeptList} from 'services';

    export default{
        data(){
            return{
                list:[],//'内科','外科','儿科','妇产科','五官科','其它'
                list1:[],//'呼吸科','心血管内科','肾病科','肿瘤科','脾胃病科','风湿病科'
                chacheJson:{},
                insideCIndex:0,
                insideCIndex1:0,
                oldCIndex:0,
                oldCIndex1:0,
            }
        },

        /*
            <departmentPicker
                :parent="this"
                :showName="'showDepartmentPicker'"
                :close="closeFn"
            />
        */

        props:{
            parent:{//父组件的this（必填）
                required:true,
                type:Object,
                default:null,
            },
            showName:{//父组件data中值的名字，用于控制组件显示（必填）
                required:true,
                type:String,
                default:false,
            },
            close:{//当组件关闭触发的回调函数
                type:Function,
                default:(isSelect,lastData,firstData)=>{},//是否是选择，选择的最后一个数据，选择的第一个数据
            },
            cIndex:{//第一个选择的索引
                type:Number,
                default:0,
            },
            cIndex1:{//第二个选择的索引
                type:Number,
                default:0,
            },
        },

        watch:{
            cIndex(){
                //外部跟新内部索引
                this.outSetInsideIndex();
            },
            cIndex1(){
                //外部跟新内部索引
                this.outSetInsideIndex();
            },
        },

        mounted(){
            //获取一级科室列表
            this.getList();
        },

        methods:{
            outSetInsideIndex(){
                if(this.oldCIndex!=this.cIndex){
                    this.oldCIndex=this.cIndex;
                    this.insideCIndex=this.cIndex;
                }
                if(this.oldCIndex1!=this.cIndex1){
                    this.oldCIndex1=this.cIndex1;
                    this.insideCIndex1=this.cIndex1;
                }
            },
            getList(){
                getFirstDeptList([],(res)=>{
                    this.list=res.body;
                    this.getList1(res.body[0].stardardDeptId);
                });
            },
            getList1(stardardDeptId){
                if(!this.chacheJson[stardardDeptId]){
                    getSecondDeptList([stardardDeptId],(res1)=>{
                        this.list1=res1.body;
                        this.chacheJson[stardardDeptId]=res1.body;
                    });
                }else{
                    this.list1=this.chacheJson[stardardDeptId];
                }
            },
            closeFn(isSelect){
                let {parent,showName,close,list,list1,insideCIndex,insideCIndex1}=this;

                if(parent&&showName){
                    parent[showName]=false;
                }

                close&&close(isSelect,list[insideCIndex]&&list[insideCIndex].stardardDeptName,list1[insideCIndex1]&&list1[insideCIndex1].stardardDeptName,{
                    standardDeptId:list1[insideCIndex1]&&list1[insideCIndex1].stardardDeptId,
                },'departmentPicker');
            },
            pickList(item,index){
                this.insideCIndex=index;
                this.getList1(item.stardardDeptId);
            },
            pickList1(item,index,isSelect){
                this.insideCIndex1=index;
                this.closeFn(isSelect);
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '~css/public.scss';

    .departmentPicker{
        width: 100%;
        height: 100vh;
        border-bottom: $height1 solid transparent;
        background-color: #fff;
        position: fixed;
        left: 0;
        top: $height1;
        z-index: 1000;
        display: none;
        &.active{
            display: block;
        }
        .title{
            height: $height1;
            line-height: $height1;
            border-bottom: $border1;
            position: relative;
            z-index: 10;
            h2{
                padding: 0 50px;
                text-align: center;
            }
            a{
                width: 50px;
                padding-left: $padding;
                height: 100%;
                color: #999;
                position: absolute;
                left: 0;
                top: 0;
            }
        }
        .main{
            display: flex;
            width: 100%;
            padding-top: $height1;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            .list{
                flex: 3.5;
                background-color: $bg;
                overflow-y: auto;
                li{
                    height: 60px;
                    line-height: 59px;
                    margin: 0 $padding;
                    text-align: center;
                    border-bottom: $border1;
                    &:last-of-type{
                        padding: 0 $padding;
                        margin: 0;
                    }
                    &.active{
                        margin: 0;
                        background-color: #fff;
                        border-color: transparent;
                    }
                }
            }
            .list1{
                flex: 6.5;
                overflow-y: auto;
                li{
                    margin-left: $padding;
                    height: $height1;
                    line-height: $height1;
                    border-bottom: $border1;
                    &:last-of-type{
                        padding: 0 $padding;
                        margin: 0;
                    }
                }
            }
        }
    }
</style>