import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type_state : 0,
    sorting : 0
  },
  getters:{
  type_getter:state =>{
    return state.type_state
  },
  sorting_getter:state =>{
    return state.sorting
  }
  },
  mutations: {
    type_mutations:(state,payload) =>{
      state.type_state = payload+1
    },
    sorting_mutations:(state,payload) =>{
      return state.sorting = payload+1
    }
  },
  actions: {
  },
  modules: {
  }
})
