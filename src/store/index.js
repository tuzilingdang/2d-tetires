import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import Block from '../block'

Vue.use(Vuex)

const state = {
    columnNum: 12,
    rowNum: 22,
    matrix: []
}

export default new Vuex.Store({
    state,
    // getters,
    // actions,
    mutations: {
        down (state, payload){
            let interval = setInterval(() => {
                // if (!block.down(that.matrix))
                if(!payload.block.down(state.matrix))
                clearInterval(interval)
            }, 1000)
        }
    }
  })