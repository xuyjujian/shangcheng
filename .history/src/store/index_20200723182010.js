import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodid:''
    
  },
  mutations: {
    setid(state,data){
      state.goodid = data
    }
  },
  actions: {
  },
  modules: {
  }
})
