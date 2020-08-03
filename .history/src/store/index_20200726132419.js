import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodid: '',
    num: null,
    Collectiongood:[],
    heightnum:3,
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
    },
    changeheightnum(state,heightnum1){
      state.heightnum=heightnum1
    }
  },
  actions: {},
  modules: {}
})