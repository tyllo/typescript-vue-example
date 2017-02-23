/* @flow */

import * as Vue from 'vue'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'

import router from 'router'
import store from 'store/index'
import App from 'components/app'

sync(store, router)

const el = document.createElement('div')
document.body.appendChild(el)

const AppInstance = Vue.extend(App)
const options = { router, store } as Vue.ComponentOptions<Vue>

export default new AppInstance(options).$mount(el)
