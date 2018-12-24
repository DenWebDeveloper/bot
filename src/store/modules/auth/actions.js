import * as types from '../../actions.types'
import http from '../../../untils/http'
import router from '../../../router/'

function redirect(state) {
    if(state.isAuth) {
        if(state.confirmAdmin && state.confirmEmail) {
            const uri = window.location.search.substring(1);
            const params = new URLSearchParams(uri);
            router.push(params.get('redirect'))
        } else {
            router.push({name:'access'})
        }
    }
}

export default {
    [types.AUTH_REQUEST]: ({commit}) => {
        return new Promise((resolve, reject) => {
            http('/auth/status')
                .then(({data}) => {
                    commit(types.SET_AUTH, data)
                    redirect(data)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    [types.AUTH_SING_IN]: ({commit}, form) => {
        return new Promise((resolve, reject) => {
            http.post('/auth/singin', form)
                .then(({data}) => {
                    commit(types.SET_AUTH, data)
                    redirect(data)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    [types.AUTH_LOGOUT]: ({commit}) => {
        return new Promise((resolve, reject) => {
            http('/auth/logout')
                .then(() => {
                    commit(types.AUTH_LOGOUT)
                    router.push({name: 'singin'})
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}
