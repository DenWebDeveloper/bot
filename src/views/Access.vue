<template>
    <v-container fill-height class="access-page">
        <v-layout align-center>
            <v-flex xs12 sm8 offset-sm2 class="white px-3 py-3 elevation-2">
                <h2>Доступ</h2>
                <p>Для того щоб буд доступний сервіс. Всі нижче перечислені пункти повинні бути виконані.</p>
                <v-list three-line subheader>
                    <v-list-tile class="list-tile">
                        <v-list-tile-action class="justify-center">
                            <v-icon v-if="getConfirmAccess.email" color="green">fas fa-check</v-icon>
                            <v-icon v-else color="red">fas fa-times</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Підтвердження почти</v-list-tile-title>
                            <v-list-tile-sub-title>Підтвердіть почту. Це потрібно щоб ми переконались, що це саме ваша почта
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider/>
                    <v-list-tile class="list-tile">
                        <v-list-tile-action class="justify-center">
                            <v-icon v-if="getConfirmAccess.admin" color="green">fas fa-check</v-icon>
                            <v-icon v-else color="red">fas fa-times</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Перевірка акаунту</v-list-tile-title>
                            <v-list-tile-sub-title>Потрібно щоб адміністратор підтвердив аккаунт. Ми повинні перевірити ваші дані.</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'Access',
        computed:{
            ...mapGetters(['getConfirmAccess'])
        }
    }
</script>

<style>
    .access-page .list-tile > div {
        padding-left: 0 !important;
    }
</style>
