declare module 'vuex-router-sync' {
  import R = require('vue-router')
  import V = require('vuex')

  export function sync(store: V.Store<Store.RootState>, router: R): void;
}
