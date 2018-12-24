<template>
    <v-app>
        <v-toolbar>
            <v-toolbar-title>
                <v-toolbar-side-icon @click="openMenu"/>
                <router-link style="color:inherit; text-decoration: none" to="/">
                    Wekings Bot
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat class="grey lighten-3" :to="{name:'awards'}">
                    <v-icon>fas fa-trophy</v-icon>
                    Нагороди
                </v-btn>
                <v-btn to="" flat>Новини</v-btn>
                <my-menu/>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>
        <snackbar/>
        <navigation-drawer/>
        <vue-footer/>
    </v-app>
</template>

<script>
    import MyMenu from '../components/Menu'
    import Footer from '../components/Footer'
    import Snackbar from '../components/Snackbar'
    import NavigationDrawer from '../components/NavigationDrawer'
    import * as types from '../store/actions.types'

    export default {
        name: 'Layout',
        components: {
            NavigationDrawer,
            Snackbar,
            MyMenu,
            VueFooter: Footer
        },
        created() {
            this.getMaterials()
        },
        methods: {
            getMaterials() {
                this.$store.dispatch(types.GET_COURSES).catch(err => {
                    this.$bus.$emit('show-snackbar', err.message, 'error')
                })
                this.$store.dispatch(types.GET_TESTS).catch(err => {
                    this.$bus.$emit('show-snackbar', err.message, 'error')
                })
            },
            logout() {
                this.$store.dispatch(types.AUTH_LOGOUT)
            },
            openMenu() {
                this.$bus.$emit('open-navigation-drawer')
            }
        }
    }
</script>

<style scoped>

</style>
