<template>
    <v-app>
        <v-toolbar>
            <v-toolbar-title>
                <router-link style="color:inherit; text-decoration: none" to="/">
                    Wekings Bot
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn to='/auth/singup' flat>Реєстрація</v-btn>
                <v-btn to='/auth/singin' flat>Авторизація</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <router-view></router-view>
            <snackbar/>
        </v-content>
        <vue-footer/>
    </v-app>
</template>

<script>
    import Snackbar from '../components/Snackbar'
    import Footer from '../components/Footer'

    export default {
        name: 'Auth',
        components: {
            Snackbar,
            VueFooter: Footer
        }
    }
</script>

<style scoped>

</style>
