<template>
  <!--所有的内容要被根节点包含起来-->
    <div id="news">
      <h1>{{msg}}</h1>
      <button @click="run()">获取</button>
      <br>
      <hr>
      <h3>store中的数据---{{this.$store.state.count}}</h3>
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10" class="list">
        <li v-for="(item,key) in list">
          <router-link :to="'/newDetail?aid='+item.aid">get传值{{key}}---{{item.title}}</router-link>
        </li>
      </ul>
      <mt-spinner type="fading-circle"></mt-spinner>
    </div>
</template>

<script>
  // 新闻列表接口：
  //
	// http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1
  //
  //
  //
  //   新闻详情接口：
  //
  //
	//  http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=488
  import VueEvent from '../model/vueEvent'
  import store from '../vuex/store.js'
    export default {
        name: "News",
        data(){
          return{
            msg:'这是一个news组件',
            list:[],
            page:1,
            loading:false
          }
        },
      store,
      methods:{
          run(){
            alert(this.msg)
          },
        loadMore(){
            let listData=this.$store.state.list;
            //this.page=this.$store.state.page;
            if(listData.length>0&&this.page==1){
              console.log('从store中读取数据')
              this.list=listData;
              ++this.page;
            }else{
              console.log('从接口中读取数据')
              this.getData()
            }
        },
        getData(){
          this.loading=true;  /*请求数据的开关*/
          // GET
          this.$http.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.page).then(response => {
            // get body data
            console.log(response.body);
            //注意this指向
            this.list=this.list.concat(response.body.result);
            ++this.page;  /*每次请求完成page++*/
            //判断最后一页是否有数据
            if(response.body.result.length<20){
              this.loading=true;     /*终止请求*/
            }else{
              this.loading=false;     /*继续请求*/
            }
            //把数据放在store中持久化
            if(this.page<=2){
              this.$store.commit('addList',{list:this.list,page:this.page})
            }
          }, err => {
            // error callback
            console.log(err)
          });
        },
      },
      mounted(){
          VueEvent.$on('to_news',data=>{
            console.log('fromHome:'+data)
          })
        //this.getData()
      }
    }
</script>
<!--scoped代表有作用域，css只生效于当前页面-->
<style lang="scss" scoped>
  #news{
    background: #e4e4e4;
  }
  h2{
    color: red;
  }
  .list{

    li{
      min-height:3.4rem;

      line-height:3.4rem;

      boder-bottom:1px solid #eee;

      font-size:1.6rem;

      a{

        color:#666;


      }
    }
  }
</style>
