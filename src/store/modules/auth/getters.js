export default {
    isAuth: state => state.isAuth,
    getConfirmAccess: state => ({email: state.confirmEmail, admin: state.confirmAdmin}),
    getUserInfo: state => state.user
}
