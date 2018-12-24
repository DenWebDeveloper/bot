import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'
import routes from './routes'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})

/*
router.beforeEach((to, from, next) => {
    const authState = store.state.auth
    if (authState.isAuth) {
        if (to.name === 'singIn' || to.name === 'singUp') {
            return next({name: 'home'})
        } else if (authState.confirmAdmin && authState.confirmEmail) {
            return next()
        } else {
            if (to.name === 'access') return next()
            return next({name: 'access'})
        }
    } else {
        if (to.name === 'singIn' || to.name === 'singUp') {
            return next()
        } else {
            return next({name: 'singIn',query:{redirect:to.path}})
        }
    }
})
*/

export default router
