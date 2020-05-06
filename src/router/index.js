import Vue from 'vue'
import Router from 'vue-router'
import Contratado from '../components/contratado/Contratado'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contratado',
      component: Contratado
    }
  ]
})
