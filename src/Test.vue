<template>
  <div id="test">
    <router-view></router-view>
    <h2>我是根组件</h2>
    <v-home></v-home>
    <br><hr>
    <v-news></v-news>
  </div>
</template>

<script>
  /**
   * 非父子组件之间的传值
   * 1、新建js文件，引入vue，进行实例化，暴露出此实例
   * 2、再要广播的地方引入定义的实例
   * 3、通过 实例名.$emit('名称',数据)
   * 4、接受 实例名.$on('名称',function)
   */
    import Home from './components/Home.vue'
    import News from './components/News.vue'
    export default {
        name: "test",
        data(){
          return{
            todo:'',
            list:[]
          }
        },
        components:{
          'v-home':Home,
          'v-news':News
        },
        methods:{

        }, mounted(){ /*vue生命周期，页面刷新就会触发的方法*/

        }
    }
</script>

<style lang="scss">
 h1{
   color:#000;
   background: darkgoldenrod;
   text-align: center;
 }
  ul li{
    list-style-type:none;
  }
  .inputStyle{
    font-size: 16px;
    height:25px;
    width: 300px;
  }
 #test {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
 }

 h1, h2 {
   font-weight: normal;
 }

 ul {
   list-style-type: none;
   padding: 0;
 }

 li {
   display: inline-block;
   margin: 0 10px;
 }

 a {
   color: #42b983;
 }
</style>
