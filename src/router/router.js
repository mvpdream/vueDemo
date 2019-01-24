import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

//1、创建组件

import Home from '../components/Home.vue'
import News from '../components/News.vue'
import NewDetail from '../components/NewDetail.vue'
import User from '../components/User.vue'
import UserAdd from '../components/User/UserAdd.vue'
import UserList from '../components/User/UserList.vue'

//2、配置路由

/**
 * 路由的嵌套
 * 1、配置路由
 * 2、父路由里面配置显示子路由的地方 <router-view></router-view>
 */

const routes = [
  { path: '/home', component: Home },
  { path: '/news', component: News },
  { path: '/newDetail/:aid', component: NewDetail },
  { path: '/newDetail', component: NewDetail },
  {
    path: '/user',
    component: User,
    children:[
      { path: 'userAdd', component: UserAdd },
      { path: 'userList', component: UserList }
    ]
  },
  { path: '*', redirect: '/home'}
]
//3、实例化vue-router
const router = new VueRouter({
  mode: 'history',//hash模式改为history模式
  routes // (缩写) 相当于 routes: routes
})
// 4、挂载路由
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App1)
// })
//5、<router-view></router-view>放在app.vue根组件里面

export default router
