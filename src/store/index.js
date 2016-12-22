import * as Vue from 'vue'
import * as Vuex from 'vuex'
import createLogger, { LoggerOption } from 'vuex/dist/logger'
import modules from './modules/index'
import * as rootState from './modules/root-state'

Vue.use(Vuex)

const plugins = [] as Vuex.Plugin<Store.RootState>[]

if (process.ENV !== ENV.production) {
  const loggetOptions = {} as LoggerOption<Store.RootState>
  const logger = createLogger(loggetOptions)
  plugins.unshift(logger)
}

export const store = new Vuex.Store({
  state: rootState.state,
  getters: rootState.getters,
  actions: rootState.actions,
  mutations: rootState.mutations,
  modules,
  plugins,
  strict: process.ENV === ENV.development,
})

export default store
