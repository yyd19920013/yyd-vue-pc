<template>
  <div class="App">
    <transition name="router-fade" mode="out-in">
        <router-view></router-view>
    </transition>

    <loading
        :showLoading="isLoading"
        :showRefreshBt="showRefreshBt"
        :status="status"
    />
  </div>
</template>

<script>
    import loading from 'components/common/loading';
    import {mapState} from 'vuex';

    export default {
        computed:{
            ...mapState({
                isLoading(state){
                    return state.isLoading;
                },
                showRefreshBt(state){
                    return state.showRefreshBt;
                },
                status(state){
                    return state.status;
                },
            })
        },

        mounted(){

        },

        components:{
            loading,
        },
    }
</script>

<style>
    @import '~css/index.css';
</style>
