<template>
    <div class="home">
        <header1
            :tIndex="0"
            :bIndex="1"
        />

        <section class="content">
            <el-carousel height="300px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <a class="imgWrap">
                        <div
                            class="img"
                            :style="{
                                backgroundImage:'url('+require('images/bg/bg1.png')+')',
                            }"
                        ></div>
                    </a>
                </el-carousel-item>
            </el-carousel>
        </section>

        <footer1 />
    </div>
</template>

<script>
    import {getImgUrl,lStore,nativeApi} from 'js/yydjs';
    import {residentIndex,findUnfinishConsult} from 'services';
    import doctorList from 'components/common/doctorList';

    export default{
        data(){
            return{
                query:this.$router.currentRoute.query,
                hotDept:[],
                departmentsList:[],
                userId:'',
                residentIndex,
                getImgUrl,
            }
        },

        mounted(){
            //获取首页数据
            this.getHomeData();

            // this.$alert(
            //     '网页版不支持该功能，请下载app进行体验！',
            //     '提示！',
            //     {
            //         confirmButtonText:'确定',
            //         callback:(action)=>{
            //             console.log(action);
            //             this.$confirm(
            //                 '网页版不支持该功能，请下载app进行体验?',
            //                 '提示',
            //                 {
            //                     confirmButtonText:'确定',
            //                     cancelButtonText:'取消',
            //                 }
            //             ).then(()=>{
            //                 console.log('确定');
            //             }).catch(()=>{
            //                 console.log('取消');
            //             });
            //         },
            //     }
            // );
        },

        methods:{
            getHomeData(){
                residentIndex([],(res)=>{
                    this.hotDept=res.body.hotDept;
                });
            },
        },

        components:{
            doctorList,
        },
    }
</script>

<style lang="scss" scoped>
    @import '~css/public.scss';

    .home{
        .content{
            .imgWrap{
                width: 100%;
                height: 100%;
                .img{
                    width: 100%;
                    height: 100%;
                    background: no-repeat center center;
                    background-size: cover;
                }
            }
        }
    }
</style>