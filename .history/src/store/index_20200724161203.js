import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodid: '',
    num: null,
  },
  mutations: {
    setid(state, data) {
      state.goodid = data
    },
    addnum(state, goodsnum) {
      state.num = goodsnum
      if(state.num===0){
        state.num =null
      }
    }
  },
  actions: {},
  modules: {}
})