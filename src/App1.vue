<template>
  <!--  vue模板里面 所有内容都要包含在根组件里面 -->
  <div id="app1">
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <header class="header">
        <router-link to="/home">首页</router-link>
        <router-link to="/news">新闻</router-link>
        <router-link to="/user/userList">用户</router-link>
      </header>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
  /**
   * 动态路由
   * 1、配置动态路由
   *  routes: [
         // 动态路径参数 以冒号开头
         { path: '/user/:id', component: User }
       ]
   2、this.$route.params获取动态路由的值
   */
  export default {
  name: 'app1',
  data () { /**业务逻辑里面定义的数据**/
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{/**放自定义方法的地方**/

  }
}
</script>

<style lang="scss">
  .header{
    height:4.4rem;

    background:#000;

    color:#fff;

    line-height:4.4rem;

    text-align:center;

    a{
      color:#fff;

      padding:0 2rem

    }
  }
</style>
