import * as Vue from 'vue'

const template = `
<section class='home'>
  <div class='button' @click='test'></div>
</section>
`

export const home: Vue.ComponentOptions<Vue> = {
  name: 'home',
  template,
  data: () => ({
    title: 'Home page',
  }),
  methods: {
    test() {
      // TODO: title, $store and $router - does not exist for ts (((
      this.title = ''
      this.$store.commit('INCRIMENT')
      this.$router.push({ name: 'test' })
    }
  },
}

export default home
