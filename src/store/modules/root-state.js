import { ActionTree, GetterTree, MutationTree, Module } from 'vuex'
import * as types from '../types'

type R = Store.RootState
type S = Store.RootState

export const state: S = {
  session: null,
  count: 0,
}

export const getters: GetterTree<S, R> = {
  isLogged: (state) => !!state.session,
}

export const actions: ActionTree<S, R> = {
  increment({ commit }) {
    commit(types.INCREMENT)
  },

  decrement({ commit }) {
    commit(types.DECREMENT)
  }
}

export const mutations: MutationTree<S> = {
  [types.INCREMENT](state) {
    state.count++
  },
  [types.DECREMENT](state) {
    state.count--
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
} as Module<S, R>
