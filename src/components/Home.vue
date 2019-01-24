<template>
  <!--所有的内容要被根节点包含起来-->
  <div id="home">
    <h1>{{msg}}</h1>
    <button @click="goNews()">通过js跳转到新闻页面</button>
    <h3>store中的数据---{{this.$store.state.count}}     ---{{this.$store.getters.computedCount}}</h3>
    <button @click="incCount()">改变store中的值</button>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>

    <el-button icon="el-icon-search" circle></el-button>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <el-button type="success" icon="el-icon-check" circle></el-button>
    <el-button type="info" icon="el-icon-message" circle></el-button>
    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
    <el-button type="danger" icon="el-icon-delete" circle></el-button>

    <el-input placeholder="请输入内容"></el-input>
    <!--
      父组件给自组件传值的方法
      父组件调用子组件的时候，绑定动态属性
      在子组件里面通过props接受
    -->
    <v-header :title="title" :fun="fun" :home="this"></v-header>
    <v-header ref="header"></v-header>
    <button @click="getChilds">获取子组件的数据和方法</button>
    <button @click="emitNews()">给News组件广播数据</button>
    <br>
    <hr>
    <v-lify v-if="flag"></v-lify>
    <button @click="flag=!flag">挂载/卸载组件</button>
    <button @click="getData()">vue-resource获取数据</button>
    <button @click="getData1()">axios获取数据</button>
    <ul>
      <li v-for="item in list">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  /**
   * 请求数据的模板
   * vue-resource
   * axios
   * cnpm install axios --save
   * 哪里用哪里引入
   * fetch-jsonp
   *
   *
   *  父组件主动获取子组件的方法
   *  1、调用子组件的时候定义ref
   *  <v-header ref="header"></v-header>
   *  2、在父组件通过 this.$refs.header.属性/方法 获取
   *  子组件主动获取父组件的方法
   *  this.$parent.数据
   *  this.$parent.方法
   * */
  import Header from './Header.vue'
  import Lify from './Lify.vue'
  import Axios from 'axios'
  import VueEvent from '../model/vueEvent'

  var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';

  /**
   * 使用vuex
   * 1 引入store
   * 2 注册    使用数据 this.$store.state.count
   * */
  import store from '../vuex/store.js'

  export default {
    name: "Home",
    data() {
      return {
        msg: '这是一个home组件',
        flag: true,
        list: [],
        title: '首页'
      }
    },
    store,
    components: {
      'v-header': Header,
      'v-lify': Lify
    },
    methods: {
      run() {
        alert(this.msg)
      },
      fun(data) {
        alert('我是home组件的fun方法,子传过来的值：' + data)
      },
      getData() {
        // GET
        this.$http.get(api).then(response => {
          // get body data
          console.log(response.body);
          //注意this指向
          this.list = response.body.result;
        }, err => {
          // error callback
          console.log(err)
        });
      },
      getData1() {
        Axios.get(api)
          .then(response => {
            // handle success
            this.list = response.data.result;
            console.log(response.data);
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
      },
      getChilds() {
        alert(this.$refs.header.msg)
      },
      emitNews() {
        VueEvent.$emit('to_news', this.msg)
      },
      goNews() {
        //this.$router.push({path:'news'})
        //this.$router.push({path:'/newDetail?aid=495'})
      },
      incCount() {
        //改变store中的数据
        this.$store.commit('incCount')
        //通过action间接改变store中的值
        //this.$store.dispatch('incMutationsCount')
      }
    },
    mounted() {
      //this.getData()
    }
  }
</script>
<!--scoped代表有作用域，css只生效于当前页面-->
<style lang="scss" scoped>
  #home {
    background: #e4e4e4;
  }

  h2 {
    color: red;
  }
</style>
