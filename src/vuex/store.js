import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


//state用于存储数据
var state= {
  count: 1,
  list:[],
  page:1
};

//mutations里面放的是用于改变state里面值的方法
var mutations={
  incCount(){
    ++state.count
  },
  addList(state,data){
    state.list=data.list;
    state.page=data.page
  }
};

//类似于计算属性，当改变state的值的时候会触发此方法
var getters={
  computedCount:(state)=>{
    return state.count*2
  }
};

// Action 基本没有用
// Action 类似于 mutation，不同在于：
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
var actions= {
  incMutationsCount(context) {    /*因此你可以调用 context.commit 提交一个 mutation*/
    context.commit('incCount');    /*执行 mutations 里面的incCount方法 改变state里面的数据*/
  }
}




//实例化
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});


export default store
