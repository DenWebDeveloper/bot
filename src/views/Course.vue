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
                            <h4>{{course.name}}</h4>
                            <p class="mb-0 mt-1">{{course.short_description}}</p>
                        </div>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                        <v-list-tile v-for="item in course.additional_info" :key="item.id">
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
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 class="white display-1 elevation-2 px-3 py-2 mt-4 mb-2">Матеріали</v-flex>
        </v-layout>
        <v-layout wrap>
            <v-flex xs12 sm4 v-for="item in  files" :key="item.id">
                <v-card class="fill-height justify-space-between" style="display: flex;flex-direction: column;">
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">{{item.name}}</div>
                            <span class="grey--text">{{item.description}}</span>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn @click="openClick(item.url)" flat color="purple">Відкрити</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'Course',
        data() {
            return {
                course: {},
                files: []
            }
        },
        computed: {
            ...mapGetters([
                'getCourseById'
            ])
        },
        created() {
            this.course = this.getCourseById(Number(this.$route.params.id))
            if (this.course.files === undefined) {
                this.getFiles(this.course.id)
            }
        },
        methods: {
            getFiles(id) {
                this.$http(`/courses/${id}/files`).then(({data}) => {
                    this.files = data
                })
            },
            openClick(url) {
                window.open(url, '_blank')
            }
        },
        beforeRouteEnter(to, from, next) {
            const id = Number(to.params.id)
            if (isNaN(id)) return next({name: 'notFound'})
            next()
        }
    }
</script>
