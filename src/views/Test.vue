<template>
    <v-container grid-list-md>
        <v-layout wrap>
            <v-flex md6>
                <img src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" alt="Preview test">
            </v-flex>
            <v-flex md6>
                <v-card>
                    <v-card-title>
                        <div>
                            <h4>{{test.name}}</h4>
                            <p class="mb-0 mt-1">{{test.short_description}}</p>
                        </div>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                        <v-list-tile v-for="item in test.additional_info" :key="item.id">
                            <v-list-tile-content>{{item.name}}:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{item.value}}</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>Fat:</v-list-tile-content>
                            <v-list-tile-content class="align-end">Title</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>Carbs:</v-list-tile-content>
                            <v-list-tile-content class="align-end">Title</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>Protein:</v-list-tile-content>
                            <v-list-tile-content class="align-end">Title</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>Sodium:</v-list-tile-content>
                            <v-list-tile-content class="align-end">Title</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>Calcium:</v-list-tile-content>
                            <v-list-tile-content class="align-end">Tilte</v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>Iron:</v-list-tile-content>
                            <v-list-tile-content class="align-end">Title</v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                    <v-card-actions>
                        <v-spacer/>
                        <v-btn @click="startTest" flat color="orange">Розпочати тест</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import * as types from '../store/actions.types'
    import {mapGetters} from 'vuex'

    export default {
        name: 'Test',
        data() {
            return {
                test: {},
            }
        },
        computed: {
            ...mapGetters([
                'getTestById'
            ])
        },
        created() {
            const test = this.getTestById(Number(this.$route.params.id))
            test ? this.test = test : this.getTest()
        },
        methods: {
            getTest() {
                this.$http(`/tests/${this.$route.params.id}`).then(({data}) => {
                    this.test = data
                    this.$store.commit(types.ADD_TEST, data)
                })
            },
            startTest() {
                this.$http.post('/tests/start', {testId: this.$route.params.id}).then(() => {
                    this.$store.commit(types.START_TESTS, this.test)
                    this.$router.push({name: 'testQuestions'})
                }).catch(err => {
                    this.$bus.$emit('show-snackbar', err.message, 'error')
                })
            }
        },
        beforeRouteEnter(to, from, next) {
            const id = Number(to.params.id)
            if (isNaN(id)) return next({name: 'notFound'})
            next()
        }
    }
</script>

<style scoped>

</style>
