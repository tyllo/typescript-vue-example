import * as Vue from 'vue'

const template = `
<section class='home'>
  <div class='button' @click='test'></div>
</section>
`

export const Test: Vue.Component = {
  name: 'home',
  template,
  data: () => ({}),
  methods: {
    test() {
      // TODO: $store - does not exist for ts (((
      this.$store.commit('DECREMENT')
    }
  },
}

export default Test
