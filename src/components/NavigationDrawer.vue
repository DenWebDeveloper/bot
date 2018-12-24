<template>
    <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary>
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>John Leider</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-list>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Основные</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Арена</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Комплекты</v-list-tile-title>
            </v-list-tile>

        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import bus from '../untils/bus'

    export default {
        name: 'NavigationDrawer',
        data() {
            return {
                drawer: true,
                items: [
                    {title: 'Home', icon: 'dashboard'},
                    {title: 'About', icon: 'question_answer'}
                ]
            }
        },
        created() {
            bus.$on('open-navigation-drawer', this.handleMenu)
        },
        beforeDestroy() {
            bus.$off('open-navigation-drawer', this.handleMenu)
        },
        methods: {
            handleMenu() {
                this.drawer = true
            }
        }
    }
</script>

<style scoped>

</style>
