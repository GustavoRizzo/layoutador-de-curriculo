import Vue from 'vue'
import Router from 'vue-router'
import Contratado from '../pages/Contratado'
import FormularioCurriculo from '../pages/FormularioCurriculo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contratado',
      component: Contratado
    },
    {
      path: '/FormularioCurriculo',
      name: 'FormularioCurriculo',
      component: FormularioCurriculo
    }
  ]
})
