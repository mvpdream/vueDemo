<template>
  <!--所有的内容要被根节点包含起来-->
    <div id="detail">
      <h1>{{list.title}}</h1>
      <div v-html="list.content">
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            msg:'这是详情页面',
            list:[]
          }
        },
      methods:{
        getData(){
          // GET
          this.$http.get('http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+this.$route.query.aid).then(response => {
            // get body data
            console.log(response.body);
            //注意this指向
            this.list=response.body.result[0];

          }, err => {
            // error callback
            console.log(err)
          });
        },
      },
      mounted(){
        // console.log('/newDetail/key',this.$route.params)
        // console.log('/newDetail?key',this.$route.query)
        this.getData()
      }
    }
</script>
<!--scoped代表有作用域，css只生效于当前页面-->
<style lang="scss">
  #detail{

    padding:1rem;

    line-height:2;

    img{

      max-width:100%;
    }
  }
</style>
