<template>
  <div id="todoList">
    <h1>TodoList</h1>
    <div style="text-align: center">
      <input type="text" class="inputStyle" v-model="todo" @keyup.enter="add()"/>
      <button @click="add()" style="width: 100px;font-size: 15px;border: none;background: cadetblue">增加</button>
    </div>
    <br>
    <hr>
    <br>
    <h2>进行中</h2>
    <hr>
    <ul>
      <li v-for="(item,key) in list" v-if="!item.checked">
        <input type="checkbox" v-model="item.checked" style="margin-right: 20px;" @change="saveList()"/>
        {{item.text}}
        <button @click="remove(key)" style="margin-left: 20px">删除</button>
      </li>
    </ul>
    <br>

    <br>
    <h2>已完成</h2>
    <hr>
    <ul>
      <li v-for="(item,key) in list" v-if="item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList()">
        {{item.text}}
        <button @click="remove(key)">删除</button>
      </li>
    </ul>
    <hr>
    <h2>我是根组件</h2>
    <v-home></v-home>
    <v-news></v-news>
  </div>
</template>

<script>
    import storage from './model/storage.js'
    /*
    * 1、引入组件
    * 2、挂载组件
    * 3. 在模板中运行
    * ----------------
    * 生命周期函数
    * 组件挂载以及组件更新组件销毁出发的一系列方法
    * */
    import Home from './components/Home.vue'
    import News from './components/News.vue'
    export default {
        name: "todoList",
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
          add(){
            this.list.push({
              text:this.todo,
              checked:false
            });
            storage.set('list',this.list);
            this.todo=''
          },
          remove(i){
            this.list.splice(i,1);
            storage.set('list',this.list)
          },
          saveList(){
            storage.set('list',this.list)
          }
        }, mounted(){ /*vue生命周期，页面刷新就会触发的方法*/
          console.log()
          let list=storage.get('list');
          if(list){
            this.list=list
          }
        }
    }
</script>

<style lang="scss" scoped>
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
</style>
