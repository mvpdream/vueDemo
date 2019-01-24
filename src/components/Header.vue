<template>
  <!--所有的内容要被根节点包含起来-->
    <div id="header">
      <h2>{{msg}}------>{{title}}</h2>
      <button @click="fun('123')">执行父组件的方法</button>
      <button @click="getParent()">获取父组件的数据和方法</button>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
          return{
            msg:'这是头部组件'
          }
        },
      methods:{
          run(){
            alert(this.msg)
          },
          getParent(){
            //alert(this.home.msg)
            alert(this.$parent.msg)
          }
      },
      // props:['title','fun','home']
      props:{'title':String,'fun':Function,'home':Object}
    }
</script>
<!--scoped代表有作用域，css只生效于当前页面-->
<style lang="scss" scoped>
  h2{
    color: red;
  }
</style>
