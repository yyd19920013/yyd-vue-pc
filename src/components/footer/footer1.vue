<template>
    <footer class="footer1">
        <div class="footTop">
            <div class="wrap">
                <div class="fl">
                    <ul>
                        <li>
                            <h3>关于我们</h3>
                            <a>公司介绍</a>
                            <a>媒体介绍</a>
                            <a>联系我们</a>
                        </li>
                        <li>
                            <h3>帮助</h3>
                            <a>新手指引</a>
                            <a>在线理财</a>
                            <a>银行存管</a>
                            <a>帮助中心</a>
                        </li>
                        <li>
                            <h3>帮助</h3>
                            <h4>400-888-88888</h4>
                            <h5>工作时间：9:00-18:00</h5>
                        </li>
                    </ul>
                </div>

                <div class="fr">
                    <ul>
                        <li>
                            <h3>西子网</h3>
                            <img :src="require('images/portrait.png')" alt="logo">
                        </li>
                        <li>
                            <h3>订阅号</h3>
                            <img :src="require('images/portrait.png')" alt="logo">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footBottom">
            <h3>
                <span>友情链接</span>
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <a>人人贷|</a>
                <a>陆金所|</a>
                <a>拍拍贷|</a>
                <a>人人贷|</a>
                <a>陆金所|</a>
                <a>拍拍贷</a>
            </h3>
            <h3>杭州金翅鸟智能科技有限公司 Copyright Reserved 2018-2019</h3>
            <h3>市场有风险 投资需谨慎</h3>
        </div>
    </div>
    </footer>
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

        },

        methods:{

        },
    }
</script>

<style lang="scss" scoped>
    @import '~css/public.scss';

    .footer1{
        width: 100%;
        .footTop{
            width: 100%;
            background-color: #393737;
            .wrap{
                width: 1200px;
                padding-top: 10px;
                padding-bottom: 20px;
                margin: 0 auto;
                overflow: hidden;
            }
            .fl{
                ul{
                    overflow: hidden;
                    li{
                        float: left;
                        width: 200px;
                        h3{
                            line-height: 50px;
                            font-size: 16px;
                            color: #fff;
                        }
                        a{
                            display: block;
                            line-height: 20px;
                            font-size: 12px;
                            color: #fff;
                        }
                        a:hover{
                            color: $cp;
                        }
                    }
                    li:last-of-type{
                        h4{
                            line-height: 50px;
                            font-size: 20px;
                            color: #fff;
                        }
                        h5{
                            line-height: 30px;
                            font-size: 18px;
                            color: #fff;
                        }
                    }
                }
            }
            .fr{
                ul{
                    overflow: hidden;
                    li{
                        float: left;
                        width: 130px;
                        padding: 0 10px;
                        text-align: center;
                        h3{
                            height: 30px;
                            line-height: 30px;
                            color: #fff;
                        }
                        img{
                            width: 100%;
                        }
                    }
                }
            }
        }
    }

    .footBottom{
        width: 100%;
        padding: 10px 0;
        text-align: center;
        background-color: #2D2A2A;
        h3{
            line-height: 20px;
            font-size: 12px;
            color: #fff;
            a:hover{
                color: $cp;
            }
        }
    }
</style>