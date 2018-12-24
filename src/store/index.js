import Vue from 'vue'
import Vuex from 'vuex'

import materials from './modules/materials'
import test from './modules/test'
import auth from './modules/auth'

Vue.use(Vuex)

const store =  new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    modules: {
        materials,
        test,
        auth
    }
})

export  default store
