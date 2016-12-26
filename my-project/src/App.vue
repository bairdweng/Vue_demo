<template>
    <div id="mainview">
        <div class="zhanwei"></div>
        <keep-alive>
            <muse v-if="bottomNav === 'tab1'"></muse>
            <div v-if="bottomNav === 'tab2'">卧槽你大爷</div>
            <div v-if="bottomNav === 'tab3'">卧槽你大爷,我是第3个页面</div>
        </keep-alive>
        <div class="fixed_div">
            <mu-appbar :title='title'>
            </mu-appbar>
        </div>
        <div class="zhanwei"></div>
        <div class="fixed_bottom">
            <mu-paper>
                <mu-bottom-nav :value="bottomNav" @change="handleChange">
                    <mu-bottom-nav-item value="tab1" title="主页" icon="restore"/>
                    <mu-bottom-nav-item value="tab2" title="收藏" icon="favorite"/>
                    <mu-bottom-nav-item value="tab3" title="位置" icon="location_on"/>
                </mu-bottom-nav>
            </mu-paper>
        </div>
    </div>
</template>
<script>
    import Muse from './components/Main.vue'
    import Navigationbar from './components/Temple/Bar.vue'
    import BottomNavigation from './components/Temple/BottomNavigation.vue'
    export default {
        components: {
            Muse,
            Navigationbar,
            BottomNavigation
        },
        data () {
            return {
                bottomNav: 'tab1',
                title:'主页'
            }
        },
        methods: {
            handleChange (val){
                this.bottomNav = val;
            }
        }
    }
</script>

