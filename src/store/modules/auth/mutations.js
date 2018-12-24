import * as types from '../../actions.types'

export default {
    [types.SET_AUTH]: (state, data) => {
        state.isAuth = data.isAuth
        state.confirmEmail = data.confirmEmail
        state.confirmAdmin = data.confirmAdmin
        state.user = data.user
    },
    [types.AUTH_LOGOUT]: (state) => {
        state.isAuth = false
        state.confirmEmail = false
        state.confirmAdmin = false
        state.user = {}
    }
}
