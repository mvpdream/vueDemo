<template>
  <!--所有的内容要被根节点包含起来-->
  <div id="lify">
    <h2>生命周期函数的演示</h2>
  </div>
</template>

<script>
  export default {
    name: "Lify",
    data() {
      return {
        msg: '这是一个生命周期演示的组件'
      }
    },
    methods: {
      run() {
        alert(this.msg)
      }
    },
    beforeCreate() {
      console.log('实例创建之前')
    },
    created() {
      console.log('实例创建完成')
    },
    beforeMount() {
      console.log('模板编译之前')
    },
    mounted() {
      //数据请求应该放在此处
      console.log('模板编译完成')
    },
    beforeUpdate() {
      console.log('数据更新之前')
    },
    updated() {
      console.log('数据更新完成')
    },
    beforeDestroy() {
      console.log('实例销毁之前')
    },
    destroyed() {
      console.log('实例销毁完成')
    }

  }
</script>
<!--scoped代表有作用域，css只生效于当前页面-->
<style lang="scss" scoped>

</style>
