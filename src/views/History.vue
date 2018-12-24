<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 class="white px-3 py-3 mb-3">
                <h2>Історія</h2>
            </v-flex>
            <v-flex xs12 v-if="results.length !== 0">
                <v-list two-line>
                    <template v-for="item in results">
                        <v-list-tile
                                :key="item.id"
                                avatar>
                            <v-list-tile-avatar>
                                <div class="result-rounded orange darken-5">{{item.result}}</div>
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>{{item.test.name}}</v-list-tile-title>
                                <v-list-tile-sub-title>Дата проходження: {{new Date().toLocaleDateString()}}, Результат: {{item.result}}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-btn class="px-3" flat>
                                    Відповіді
                                </v-btn>
                            </v-list-tile-action>
                        </v-list-tile>

                    </template>
                </v-list>
            </v-flex>
            <v-flex v-else xs12 class="white px-3 py-3 mb-3">
                <h2>Ви ще не пройшли жодного тесту</h2>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'History',
        data() {
            return {
                results: [],
                loaded: false,
            }
        },
        created() {
            this.getResults()
        },
        methods: {
            getResults() {
                this.$http(`/tests/history`).then(({data}) => {
                    this.results = data
                })
            }
        }
    }
</script>

<style scoped>
    .result-rounded {
        font-size: 20px;
        color: white;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
