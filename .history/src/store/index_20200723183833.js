import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodid:'',
    num:null,
  },
  mutations: {
    setid(state,data){
      state.goodid = data
    },
    addnum(state){
      state.num ++
    }
  },
  actions: {
  },
  modules: {
  }
})
