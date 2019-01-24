<template>
  <!--所有的内容要被根节点包含起来-->
  <div id="userList">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        msg:'这是用户列表页面',
        list:[]
      }
    },
    methods:{

    }
  }
</script>
<!--scoped代表有作用域，css只生效于当前页面-->
<style lang="scss" scoped>

</style>
