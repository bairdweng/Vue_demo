<template>
    <div >
        <Hearderbar :commData="commConf"></Hearderbar>
        <div class="zhanwei"></div>
        <div>
            <keep-alive>
             <router-view></router-view>
            </keep-alive>
        </div>
        <div class="zhanwei"></div>
        <Footerbar :commData="commConf" v-show="commConf.isFooter"></Footerbar>
        <Loadingbar :LoadingText="loadingConf.loadingText"  v-show="loadingConf.isLoading"></Loadingbar>
        <mu-toast v-if="loadingConf.isToast" :message="loadingConf.toastText" />
    </div>
</template>
<script>
    import Hearderbar from './components/Header.vue'
    import Footerbar from './components/Footer.vue'
    import Loadingbar from './components/Loading.vue'
    export default {
        components: {
            Hearderbar,
            Footerbar,
            Loadingbar
        },
        data () {
            return {
                commData:{
                    title:'育儿期',
                    isFooter:true
                }
          }
        },
        created(){
            this.$router.push('/mainview');
//            this.$router.push('/login');
        },
        //获取vuex的公共参数。
        computed:{
            commConf:function () {
                return  this.$store.getters.commConf
            },
            loadingConf:function () {
                var  Obj = this.$store.getters.loadingConf;
                return  Obj
            }
        }
    }
</script>

