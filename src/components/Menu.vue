<template>
    <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x>
        <v-btn
                slot="activator"
                color="indigo"
                dark
                icon>
            <v-icon>more_vert</v-icon>
        </v-btn>

        <v-card>
            <v-list three-line>
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>{{getUserInfo.name}} {{getUserInfo.surname}}</v-list-tile-title>
                        <v-list-tile-sub-title>Фармацевт</v-list-tile-sub-title>
                        <v-list-tile-title>20 балів</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-tile>
                    <v-list-tile-action style="width: 100%">
                        <v-btn block color="grey" flat>Особисті дані</v-btn>
                    </v-list-tile-action>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-action style="width: 100%">
                        <v-btn :to="{name:'history'}" block color="grey" flat>Історія</v-btn>
                    </v-list-tile-action>
                </v-list-tile>

                <v-list-tile>
                    <v-list-tile-action style="width: 100%">
                        <v-btn block color="grey" flat>Налаштування</v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn flat @click="menu = false">Закрити</v-btn>
                <v-btn color="primary" flat @click="logout">Вийти</v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</template>

<script>
    import {mapGetters} from 'vuex'
    import * as types from '../store/actions.types'
    export default {
        name: 'Menu',
        data() {
            return {
                menu: false,
            }
        },
        computed: {
            ...mapGetters(['getUserInfo'])
        },
        methods: {
            logout() {
                this.menu = false
                this.$store.dispatch(types.AUTH_LOGOUT)
            }
        }
    }
</script>

<style scoped>

</style>
