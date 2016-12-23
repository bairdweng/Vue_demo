<template>
    <div id="mainview">
        <div class="zhanwei"></div>
        <muse v-if="tab1"></muse>
        <div v-if="tab2">卧槽你大爷</div>
        <div v-if="tab3">卧槽你大爷,我是第3个页面</div>
        <div class="fixed_div">
            <Navigationbar></Navigationbar>
        </div>
        <div class="zhanwei"></div>
        <div class="fixed_bottom">
            <mu-paper>
                <mu-bottom-nav :value="bottomNav" @change="handleChange">
                    <mu-bottom-nav-item value="recents" title="主页" icon="restore"/>
                    <mu-bottom-nav-item value="favorites" title="收藏" icon="favorite"/>
                    <mu-bottom-nav-item value="nearby" title="位置" icon="location_on"/>
                </mu-bottom-nav>
            </mu-paper>
        </div>
    </div>
</template>
<script>
    import Muse from './components/Muse.vue'
    import Navigationbar from './components/Bar.vue'
    import BottomNavigation from './components/BottomNavigation.vue'
    export default {
        components: {
            Muse,
            Navigationbar,
            BottomNavigation
        },
        data () {
            return {
                bottomNav: 'recents',
                tab1:true,
                tab2:false,
                tab3:false
            }
        },
        methods: {
            handleChange (val) {
                if (val =='recents'){
                    this.tab1 = true;
                    this.tab2 = false;
                    this.tab3 = false;
                }
                else if (val == 'favorites'){
                    this.tab1 = false;
                    this.tab2 = true;
                    this.tab3 = false;
                }
                else {
                    this.tab1 = false;
                    this.tab2 = false;
                    this.tab3 = true;
                }
                this.bottomNav = val
            }
        }
    }
</script>
<style type="text/css">
    .fixed_div{
        position:fixed;
        width:100%;
        top: 0px;
    }
</style>
<style type="text/css">
    .fixed_bottom{
        position:fixed;
        width:100%;
        bottom: 0px;
    }
</style>
<style type="text/css">
    .zhanwei{
        height:64px;
        width: 100%;
    }
</style>
