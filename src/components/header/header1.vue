<template>
    <header class='header1'>
        <div class="headTop">
            <div class="fl">
                <span>西子金融</span>
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <span>客服热线：400-888-88888(工作时间：9:00-18:00)</span>
            </div>
            <div class="fr">
                <a :class="{active:tIndex==0}">
                    登录
                </a>
                <a :class="{active:tIndex==1}">
                    注册
                </a>
                <a :class="{active:tIndex==2}">
                    安全保障
                </a>
                <a :class="{active:tIndex==3}">
                    帮助中心
                </a>
                <a :class="{active:tIndex==4}">
                    APP
                </a>
                <a :class="{active:tIndex==5}">
                    资费说明
                </a>
            </div>
        </div>

        <div class="headBottom">
            <div class="wrap">
                <div class="fl">
                    <a class="logo">
                        <img :src="require('images/portrait.png')" alt="logo">
                    </a>
                </div>

                <div class="fr">
                    <router-link to="/home" :class="{active:bIndex==0}">
                        首页
                    </router-link>
                    <router-link to="/finance" :class="{active:bIndex==1}">
                        理财
                    </router-link>
                    <a :class="{active:bIndex==2}">
                        借款
                    </a>
                    <router-link to="/interact" :class="{active:bIndex==3}">
                        互动
                    </router-link>
                    <a :class="{active:bIndex==4}">
                        新手必读
                    </a>
                    <a :class="{active:bIndex==5}">
                        信息披露
                    </a>
                    <a :class="{active:bIndex==6}">
                        关于我们
                    </a>
                    <a :class="{active:bIndex==7}">
                        我的账户
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default{
        data(){
            return{

            }
        },

        /*

        */

        props:{
            tIndex:{
                type:Number,
                default:0,
            },
            bIndex:{
                type:Number,
                default:0,
            },
        },

        methods:{

        },
    }
</script>

<style lang="scss" scoped>
    @import '~css/public.scss';

    .header1{
        width: 100%;
        .headTop{
            width: 1200px;
            height: 50px;
            line-height: 50px;
            margin: 0 auto;
            overflow: hidden;
            .fl{
                span{
                    color: #666;
                }
            }
            .fr{
                a{
                    color: #666;
                    padding: 10px;
                }
                a:hover,a.active,a:nth-of-type(1),a:nth-of-type(2){
                    color: $cp;
                }
            }
        }
        .headBottom{
            width: 100%;
            height: 50px;
            line-height: 50px;
            background-color: #fff;
            @extend .shadow1;
            overflow: hidden;
            .wrap{
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;
            }
            .fl{
                a{
                    display: block;
                    height: 50px;
                    padding: 10px 0;
                    img{
                        height: 100%;
                    }
                }
            }
            .fr{
                a{
                    float: left;
                    padding: 0 20px;
                    font-size: 16px;
                    color: #333;
                }
                a:hover{
                    color: $cp;
                }
                a.active{
                    background-color: $cp;
                    color: #fff;
                }

            }
            &.active{
                position: fixed;
                top: 0;
                z-index: 1000;
            }
        }
    }
</style>