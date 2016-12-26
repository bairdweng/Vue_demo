import VueRouter from 'vue-router'
import App from './App.vue'
import Vue from 'vue'
import Newpage from './components/Newpage.vue'
import VueResource from 'vue-resource'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './Cusetom.css'
import 'animate.css'
Vue.use(VueResource);
Vue.use(MuseUI)
Vue.use(VueRouter)
//路由配置
const routes = [
  { path: '/main', component: App },
  { path: '/newpage', component: Newpage }
]
const router = new VueRouter({
  routes
})
const app = new Vue({
  router
}).$mount('#app')
router.push('/main')







