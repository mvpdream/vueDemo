<template>
  <!--  vue模板里面 所有内容都要包含在根组件里面 -->
  <div id="app">
    <h2>你好vue--{{msg}}</h2>
    <br>
    这是根组件
    <br>
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
    <!--  绑定属性 v-bind:xxx  缩写：xxx -->
    <div v-bind:title="title">鼠标喵上去看一下</div>
    <!--  绑定html v-html -->
    <div v-html="h"></div>
    <br>
    <ul>
      <li v-for="(item,key) in arr" :class="{'red':key==1,'blue':key==0}">{{key}}----{{item}}</li>
    </ul>
    <div :class="{'red':flag,'blue':!flag}">dasdsadsadsa</div>
    <div class="box" v-bind:style="{width:boxWidth+'px'}"></div>
    <br>
    <br>
    <br>
    <!--MVVM双向数据绑定 M-model V-view model改变会影响视图view，view视图会影响model-->
    <h2>{{text}}</h2>
    <input type="text" v-model="text"/>
    <button v-on:click="getMsg()">获取文字信息</button>
    <button v-on:click="setMsg()">设置文字信息</button>
    <hr>
    <input type="text"ref="userinfo"/>
    <div ref="box">box</div>
    <button v-on:click="getInputValue()">获取文字信息1</button>
    <hr>
      <button @click="getInputValue(1)">执行方法的第二种方法</button>
    <br>
    <br>
    <br>
    <button @click="requestData()">请求数据</button>
    <button data-aid="123" @click="eventFn($event)">事件对象</button>
    <hr>
    <ul>
      <li v-for="item in listData">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () { /**业务逻辑里面定义的数据**/
    return {
      msg: 'Welcome to Your Vue.js App',
      list:['11','22','33'],
      title:'这是标题',
      h:'<h2>我是h2</h2>',
      arr:['1111','2222','3333'],
      flag:false,
      boxWidth:100,
      text:'哈哈哈',
      listData:[]
    }
  },
  methods:{/**放自定义方法的地方**/
    getMsg(){
      alert(this.text)
    },
    setMsg(){
      this.text='哈哈呵呵呵呵'
    },
    getInputValue(i){
      //通过$refs获取dom节点
      console.log('获取到的参数：'+i)
      console.log(this.$refs.userinfo)
      this.$refs.box.style.background='red';
      alert(this.$refs.userinfo.value)
    },
    requestData(){
        for(let i=0;i<10;i++){
          this.listData.push('我是第'+i+'条数据')
        }
    },
    eventFn(e){
      e.srcElement.style.background='red';
      console.log(e)
      //获取自定义属性的值
      console.log('自定义属性data-aid：'+e.srcElement.dataset.aid)
    }
  }
}
</script>

<style lang="scss">
#app {
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
  .red{
    color:red;
  }
  .blue{
    color: blue;
  }
  .box{
    width: 50px;
    height: 100px;
    background-color: red;
  }
</style>
