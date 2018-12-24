<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 class="grey lighten-3 mb-3 py-2 pl-2 elevation-3">
                <h2 class="display-2">Шахта</h2>
            </v-flex>
            <v-flex xs6>
                <div class="white px-3 py-3">
                    <v-checkbox
                            color="indigo darken-3"
                            value="indigo darken-3"
                            label="Кристаллы"/>
                    <v-divider/>
                    <v-checkbox
                            color="indigo darken-3"
                            value="indigo darken-3"
                            label="Руда"/>
                </div>
            </v-flex>
            <v-flex xs6>
                <div class="white px-3 py-3">
                    <v-checkbox label="Авто запуск"/>
                    <div>
                        <v-time-picker landscape></v-time-picker>
                    </div>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import CardsCourses from '../components/CardsCourses'
    import CardsTests from '../components/CardsTests'

    export default {
        name: 'Home',
        components: {
            CardsCourses,
            CardsTests
        }
    }
</script>
