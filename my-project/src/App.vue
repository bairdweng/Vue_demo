<template>
    <div class="container" id="mainview">
        <div class="fixed_div">
            <mu-appbar :title='title'>
            </mu-appbar>
        </div>
        <div class="bar-container">
            <keep-alive>
                <MainView v-if="bottomNav == 'tab1'"></MainView>
                <Function v-if="bottomNav == 'tab2'"></Function>
                <Setting v-if="bottomNav == 'tab3'"></Setting>
            </keep-alive>
        </div>
        <div class="fixed_bottom">
            <mu-paper>
                <mu-bottom-nav :value="bottomNav" @change="handleChange">
                    <mu-bottom-nav-item value="tab1" title="新闻" icon="restore"/>
                    <mu-bottom-nav-item value="tab2" title="功能" icon="favorite"/>
                    <mu-bottom-nav-item value="tab3" title="设置" icon="location_on"/>
                </mu-bottom-nav>
            </mu-paper>
        </div>
    </div>
</template>
<script>
    import MainView from './components/Main.vue'
    import Function from './components/Function.vue'
    import Setting from './components/Setting.vue'
    export default {
        components: {
            MainView,
            Function,
            Setting
        },
        data () {
            return {
                bottomNav: 'tab1',
                title:'新闻'
            }
        },
        methods: {
            handleChange (val){
                this.bottomNav = val;
                switch(val){
                    case 'tab1':
                        this.title = '新闻'
                        break;
                    case 'tab2':
                        this.title = '功能'
                        break;
                    case 'tab3':
                        this.title = '设置'
                        break;
                    default:
                }
            }
        }
    }
</script>

