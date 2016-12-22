import * as Vue from 'vue'

const template = `
<main id='vue-app'>
  <router-view />
</main>
`

export const App: Vue.Component = {
  name: 'app',
  template,
}

export default App
