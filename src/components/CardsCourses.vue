<template>
    <v-container grid-list-md>
        <v-layout wrap>
            <v-flex xs12 class="grey lighten-3 mb-3 py-2 pl-2 elevation-3">
                <h2 class="display-2">Курси</h2>
            </v-flex>
            <v-flex xs12>
                <v-layout wrap>
                    <v-flex
                            v-for="item in courses"
                            xs12 sm6 md4
                            :key="item.id">
                        <v-card hover>
                            <img    width="100%"
                                    src="../assets/img_forest.jpg"
                                    height="200px">

                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{item.name}}</h3>
                                    <div>{{item.short_description}}</div>
                                </div>
                            </v-card-title>

                            <v-card-actions>
                                <v-spacer/>
                                <v-btn :to="{name:'course',params:{id:item.id}}" flat color="orange">Розпочати курс</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'CardsCourses',
        computed: {
            ...mapGetters({
                courses: 'getCourses'
            })
        }
    }
</script>

