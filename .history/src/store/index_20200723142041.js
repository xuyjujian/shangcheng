import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsid:''
  },
  mutations: {
    setid(state,data){
      state.goodsid = data
    }
  },
  actions: {
  },
  modules: {
  }
})
