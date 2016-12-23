import VueRouter from 'vue-router'
import App from './App.vue'
import Vue from 'vue'
import Hello from './components/Hello.vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './Cusetom.css'
import 'animate.css'

Vue.use(MuseUI)
Vue.use(VueRouter)

const routes = [
  { path: '/main', component: App },
  { path: '/hello', component: Hello }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
router.push('/main')



// const Home = {
//   template: `
//     <div class="home">
//       <h2>Home</h2>
//       <p>hello</p>
//     </div>
//   `
// }
//
// const Parent = {
//   data () {
//     return {
//       transitionName: 'slide-left'
//     }
//   },
//   // dynamically set transition based on route change
//   watch: {
//     '$route' (to, from) {
//       const toDepth = to.path.split('/').length
//       const fromDepth = from.path.split('/').length
//       this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
//     }
//   },
//   template: `
//     <div class="parent">
//       <h2>Parent</h2>
//       <transition :name="transitionName">
//         <router-view class="child-view"></router-view>
//       </transition>
//     </div>
//   `
// }
//
// const Default = { template: '<div class="default">default</div>' }
// const Foo = { template: '<div class="foo">foo</div>' }
// const Bar = { template: '<div class="bar">bar</div>' }
//
// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     { path: '/', component: Home },
//     { path: '/parent', component: Parent,
//       children: [
//         { path: '', component: Default },
//         { path: 'foo', component: App },
//         { path: 'bar', component: Hello }
//       ]
//     }
//   ]
// })
//
// new Vue({
//   router,
//   template: `
//     <div id="app">
//       <h1>Transitions</h1>
//       <ul>
//         <li><router-link to="/">/</router-link></li>
//         <li><router-link to="/parent">/parent</router-link></li>
//         <li><router-link to="/parent/foo">/parent/foo</router-link></li>
//         <li><router-link to="/parent/bar">/parent/bar</router-link></li>
//       </ul>
//       <transition name="slide-fade">
//         <router-view class="view"></router-view>
//       </transition>
//     </div>
//   `
// }).$mount('#app')







