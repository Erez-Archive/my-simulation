import Vue from 'vue'
import Router from 'vue-router'
import Trade from './views/Trade.vue'
import Simulation from './views/Simulation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'trade',
      component: Trade,
      mode: history,
    },
    {
      path: '/simulation',
      name: 'simulation',
      component: Simulation,
      mode: history,
    },
  ],
})
