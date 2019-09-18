<template>
    <div
        :class="{
            pullDown:true,
            animate,
        }"
        :style="{
            height:height+'px',
        }"
        ref="pullDown"
    >
        <div
            v-show="status=='pull'||status=='drop'"
            :class="{
                pull:status=='pull',
                drop:status=='drop',
            }"
        >
            <i></i>
            <span>下拉刷新</span>
            <em>释放更新</em>
        </div>
        <div v-show="status=='loading'" class="loading">
            加载中...
        </div>
        <div v-show="status=='finish'" class="finish">
            更新完成
        </div>
    </div>
</template>

<script>
    import {Type,bind,unbind,pDef} from 'js/yydjs';

    export default{
        data(){
            return{
                dom:null,
                status:'',
                start:0,
                end:0,
                height:0,
                basic:50,
                animate:false,
            }
        },

        /*
            <pullDown
                :parent="this"
                :refName="'unpayCon'"
                :loading="loadFn"
            />
        */

        props:{
            parent:{//父组件this
                required:true,
                type:Object,
                default:null,
            },
            refName:{//需要绑定下拉刷新的ref名
                required:true,
                type:String,
                default:'',
            },
            pull:{//下拉时触发的函数，touchmove一直触发
                type:Function,
                default:()=>{},
            },
            drop:{//释放时触发的函数，touchmove一直触发
                type:Function,
                default:()=>{},
            },
            loading:{//加载中触发的函数，需要调用回调函数中的finished函数，改变状态为更新完成
                type:Function,
                default:null,//(finished)=>{},
            },
            finish:{//完成时触发的函数
                type:Function,
                default:()=>{},
            },
        },

        methods:{
            pullDown(){
                let {parent,refName}=this;
                let pullDown=this.$refs.pullDown;

                if(parent&&refName&&parent.$refs[refName]){
                    let dom=parent.$refs[refName];

                    this.dom=dom;
                    bind(dom,'touchstart',this.touchstartFn);
                    bind(dom,'touchmove',this.touchmoveFn);
                    bind(dom,'touchend',this.touchendFn);
                    bind(pullDown,'transitionend',this.transitionEndFn);
                    bind(pullDown,'webkitTransitionEnd',this.transitionEndFn);
                }
            },
            touchstartFn(ev){
                let {clientY}=ev.touches[0];
                let {dom,touchstart}=this;

                this.start=clientY;
                this.status='pull';
                bind(dom,'touchmove',pDef);
                touchstart&&touchstart();
            },
            touchmoveFn(ev){
                let {clientY}=ev.touches[0];
                let {dom,start,end,height,basic,pull,drop}=this;
                let scale=2+height/basic*3;
                let top=0;

                if(clientY<start)return unbind(dom,'touchmove',pDef);
                top=parseInt((clientY-start)/scale)+end;
                top=top>0?top:0;

                if(dom.scrollTop==0){
                    this.height=top;
                    if(this.status!='loading'&&this.status!='finish'){
                        if(height<basic){
                            this.status='pull';
                            pull&&pull();
                        }else{
                            this.status='drop';
                            drop&&drop();
                        }
                    }
                }else{
                    this.status='';
                    this.start=clientY;
                    this.height=0;
                    this.end=0;
                    unbind(dom,'touchmove',pDef);
                }
            },
            touchendFn(ev){
                let {dom,status,height,basic,drop,loading}=this;

                unbind(dom,'touchmove',pDef);
                if(status!='pull'&&status!='drop')return;
                this.animate=true;
                if(status=='pull'){
                    this.height=0;
                    this.end=0;
                }else if(status=='drop'){
                    this.height=basic;
                    this.end=basic;
                    this.status='loading';
                    loading&&loading(this.finished);
                    if(!drop||Type(drop)!='function'){
                        setTimeout(()=>{
                            this.finished();
                        },500);
                    }
                }
            },
            finished(){
                let {finish}=this;

                this.animate=true;
                this.end=0;
                this.status='finish';
                finish&&finish();
                setTimeout(()=>{
                    this.height=0;
                },300);
            },
            transitionEndFn(){
                this.animate=false;
            },
        },

        mounted(){
            //执行下拉刷新方法
            this.pullDown();
        },
    }
</script>

<style lang="scss" scoped>
    @import '~css/public.scss';

    .pullDown{
        height: 0;
        line-height: 50px;
        text-align: center;
        font-size: 14px;
        color: #666;
        overflow: hidden;
        .pull,.drop,.loading,.finish{
            display: inline-block;
            height: 50px;
            line-height: 50px;
        }
        .pull,.drop{
            font-size: 0;
            i,span,em{
                vertical-align: middle;
            }
            i{
                display: inline-block;
                width: 20px;
                height: 50px;
                font-size: 20px;
                transition: transform .2s ease-out;
                background: url('../../images/arrow.png') no-repeat center center;
                background-size: 15px;
            }
            span,em{
                display: none;
                font-size: 14px;
            }
        }
        .pull{
            i{
                transform: rotate3d(0,0,1,0);
            }
            span{
                display: inline-block;
            }
        }
        .drop{
            i{
                transform: rotate3d(0,0,1,-180deg);
            }
            em{
                display: inline-block;
            }
        }
        .loading{
            padding-left: 20px;
            background: url('../../images/loading.gif') no-repeat left center;
            background-size: 15px;
        }
        &.animate{
            transition: height .1s ease-out;
        }
    }
</style>