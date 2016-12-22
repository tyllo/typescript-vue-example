import * as types from '../types'
import { Module, ActionTree, GetterTree, MutationTree } from 'vuex'

type R = Store.RootState
type S = Store.TestState

export const state: S = {
  title: 'test prop state',
  history: [],
}

export const getters: GetterTree<S, R> = {
  getTitle: (state) => state.title.toUpperCase(),
}

export const actions: ActionTree<S, R> = {
  changeTitle({ commit }, title: string) {
    commit(types.CHANGE_TITLE, title)
  },

  backTitle({ commit }) {
    commit(types.BACK_TITLE)
  }
}

export const mutations: MutationTree<S> = {
  [types.CHANGE_TITLE](state, title: string) {
    state.history.push(state.title)
    state.title = title
  },
  [types.BACK_TITLE](state) {
    state.title = state.history.pop()
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
} as Module<S, R>

