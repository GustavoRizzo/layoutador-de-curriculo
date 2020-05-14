import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            name: 'Gustavo',
            email: 'jamelao@email.com'
        },
        formularioCurriculo: {}
    },
    mutations: {
        SET_USER (store, obj) {
            store.user = obj.user
        }
    }
})
