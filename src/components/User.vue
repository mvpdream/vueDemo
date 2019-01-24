<template>
  <!--所有的内容要被根节点包含起来-->
    <div id="user">
      <h1>{{msg}}</h1>
      <div class="user">
        <div class="left">
          <ul>
            <li>
              <router-link to="/user/userAdd">增加用户</router-link>
            </li>
            <li>
              <router-link to="/user/userList">用户列表</router-link>
            </li>
          </ul>
        </div>
        <div class="right">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            msg:'这是用户页面',
            list:[]
          }
        },
      methods:{

      }
    }
</script>
<!--scoped代表有作用域，css只生效于当前页面-->
<style lang="scss" scoped>
  .user{
    display: flex;
    .left{
      width: 200px;
      min-height: 400px;
      border-right:1px solid #eee;
      li{
        line-height:2;
      }
    }
    .right{
      flex:1
    }
  }
</style>
