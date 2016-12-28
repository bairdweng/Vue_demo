import VueRouter from 'vue-router'
import App from './App.vue'
import Vue from 'vue'
import VueResource from 'vue-resource'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './Cusetom.css'
import News from './components/News.vue'
import Newpage from './components/Newpage.vue'
Vue.use(VueResource);
Vue.use(MuseUI)
Vue.use(VueRouter)
//路由配置
const routes = [
  { path: '/myapp', component: App},
  { path: '/record:title', component: Newpage ,name:'record'},
  { path: '/news:id:title', component: News,name: 'news'}
]
const router = new VueRouter({
  routes
})
const app = new Vue({
  router
}).$mount('#app')
router.push('/myapp')







