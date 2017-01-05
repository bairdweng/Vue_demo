/**
 * Created by baird on 2016/12/30.
 */
import Vue from 'vue'
import Newpage from '../page/record/Newpage'
import Login from '../page/loginregistration/Login'
import Regis from '../page/loginregistration/Regis'
import App from '../App'
import MainView from '../page/mainview/Main'
import Reading from '../page/mainview/Reading'
import Setting from '../page/mainview/Setting'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//路由配置
const routes = [
    {path:'/',component:App,
    children:[
    { path:'/login',component:Login },
    { path:'/mainview',component:MainView },
    { path:'/Reading',component:Reading },
    { path:'/setting',component:Setting },
    { path:'/regis',component:Regis },
    { path: 'function/record:title', component: Newpage ,name:'record'},
  ]}
];
const router = new VueRouter({
    routes
})
export  default router