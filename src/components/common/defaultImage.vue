<template>
    <div
        :class="{
            defaultImage:true,
            active:show,
        }"
    >
        <ul class="defaultList fullColor">
            <li
                v-for="(item,index) in defaultList"
                :style="{
                    backgroundImage:'url('+require(`images/${item.src}`)+')',
                }"
                :class="{
                    active:showIndex==index,
                }"
            >
                <div
                    v-if="item.text"
                    v-html="item.text"
                    class="hintText"
                ></div>
                <div
                    v-if="item.html"
                    v-html="item.html.text"
                    @click="item.html.click"
                    class="hintText"
                ></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import vm from 'src/main';
    import {alerts} from 'js/yydjs';
    import {exchangeVoucher} from 'services';

    export default{
        data(){
            let This=this;

            return{
                query:this.$router.currentRoute.query,
                defaultList:[
                    {
                        src:'icon/no_result.png',
                        text:'<h3>暂无数据~</h3>',
                    },
                    {
                        src:'icon/no_result.png',
                        text:'<h3>抱歉，我们未找到符合条件的结果</h3><h3>请换个关键词搜索或减少筛选条件试试~</h3>',
                    },
                    {
                        src:'icon/img_default_content.png',
                        html:{
                            text:`<h3>暂无可用的咨询券，<a style="color:#33adff;">去兑换~</a></h3>`,
                            click:This.goExchange,
                        },
                    },
                    {
                        src:'icon/img_default_content.png',
                        html:{
                            text:`<h3>暂无使用记录~</h3>`,
                            click:This.goExchange,
                        },
                    },
                ],
            }
        },

        /*
            <defaultImage
                :show="showDefaultImage"
            />
        */

        props:{
            show:{//控制缺省图的显示
                type:Boolean,
                default:true,
            },
            showIndex:{//根据索引显示定义的缺省图
                type:Number,
                default:0,
            },
        },

        created(){
            vm.$on('goExchange',this.goExchange);
        },

        beforeDestroy(){
            vm.$off('goExchange');
        },

        methods:{
            goExchange(){
                let This=this;

                this.$vux.confirm.show({
                    title:'添加咨询券',
                    placeholder:'请输入咨询券兑换码',
                    showInput:true,
                    onConfirm(value){
                        exchangeVoucher([value,''],(res)=>{
                            alerts('兑换成功');
                            vm.$emit('refreshTotalDetail');
                            vm.$emit('refreshSelectInquiryTicketIndex');
                            vm.$emit('refreshMyInquiryTicketIndex');
                            vm.$emit('refreshUsageRecord');
                        });
                    },
                });
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '~css/public.scss';

    .defaultImage{
        position: relative;
        display: none;
        &.active{
            display: block;
        }
        .defaultList{
            width: 100%;
            position: absolute;
            padding: 30% 0;
            background-color: #fff;
            li{
                padding-top: 200px;
                background: no-repeat top center;
                background-size: 200px;
                display: none;
                &.active{
                    display: block;
                }
                .hintText{
                    line-height: 24px;
                    text-align: center;
                    color: #999;
                }
            }
        }
    }
</style>
