import Vue from 'vue'
import App from './App.vue'
import TodoList from './TodoList.vue'
import Test from './Test.vue'
import App1 from './App1.vue'


import router from './router/router.js'

/**
 * 使用vue-resource请求数据的步骤
 *  安装 npm install vue-resource --save
 *  在main.js引入import VueResource from 'vue-resource'
 *  Vue.use(VueResource);
 *  在组件中使用 this.$http.get
 */
import VueResource from 'vue-resource'
Vue.use(VueResource);


//引入公共的scss样式  注：创建项目的时候必须用scss
import './assets/css/basic.scss'

//mint-ui 完整引入
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);

//element-ui
//完整引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//按需引入
// import { Button, Select,Input } from 'element-ui';
// Vue.use(Button)
// Vue.use(Select)
// Vue.use(Input)

new Vue({
  el: '#app',
  router,
  render: h => h(App1)
})






