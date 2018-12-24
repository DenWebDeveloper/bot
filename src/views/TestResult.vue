<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card class="mb-3">
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">{{getActiveTest.name}}</div>
                            <span class="headline">Ваш результат:{{this.getTestResult}}/{{this.getQuestions.length}}</span>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex v-for="(item,index) in getQuestions" :key="item.id" xs12>
                <v-card class="mb-3">
                    <div class="d-flex">
                        <div class="ml-2 mt-2" style="max-width: 30px;">
                            <v-icon v-if="getChekedAnswer(item.id).userCorrect" class="green--text">fas fa-check
                            </v-icon>
                            <v-icon v-else class="red--text">fas fa-times</v-icon>
                        </div>
                        <img :src="item.src" alt="Questions text"/>
                    </div>
                    <v-card-title primary-title>
                        <v-radio-group :readonly="true" :value="getChekedAnswer(item.id).answerUserId">
                            <v-radio
                                    :color="getStatusRadio(answer.id,item.id).color"
                                    v-for="answer in item.answers"
                                    :key="answer.id"
                                    :value="answer.id">
                                <div slot="label">
                                    <div :class="getStatusRadio(answer.id,item.id).colorText">{{answer.text}}</div>
                                </div>
                            </v-radio>
                        </v-radio-group>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn @click="toggleExplanation(index)" flat color="orange">
                            {{explanationsShow[index]?'Сховати':'Показати'}} пояснення
                        </v-btn>
                    </v-card-actions>

                    <v-slide-y-transition>
                        <v-card-text v-show="explanationsShow[index]">
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You
                            won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then
                            we'll go with that data file! Hey, you add a one and two zeros to that or we walk!
                            You're going to do his laundry? I've got to find a way to escape.
                        </v-card-text>
                    </v-slide-y-transition>
                </v-card>
            </v-flex>
            <v-flex xs12>
                <v-btn @click="toggleExplanation(index)" class="white--text" color="blue-grey">
                    Повернутись на головну
                </v-btn>
                <v-btn @click="toggleExplanation(index)" class="white--text" color="info">
                    Перейти в історію результатів
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'
    import * as types from '../store/actions.types'

    export default {
        name: 'TestResult',
        data() {
            return {
                explanationsShow: []
            }
        },
        computed: {
            ...mapGetters([
                'getQuestions',
                'getResultAnswers',
                'getTestResult',
                'getActiveTest'
            ]),
        },
        created() {
            this.explanationsShow = new Array(this.getQuestions.length)
            if (!this.getActiveTest.id) this.$store.dispatch(types.GET_TEST, Number(this.$route.params.id))
        },
        methods: {
            getChekedAnswer(questionId) {
                const results = this.getResultAnswers.find(item => {
                    return item.questionId === questionId
                })
                return {
                    answerUserId: results === undefined ? '' : results.answerId,
                    userCorrect: results.userCorrect
                }
            },
            getStatusRadio(answerId, questionId) {
                let status = {}
                const result = this.getResultAnswers.find(item => {
                    return item.questionId === questionId
                })
                switch (true) {
                    //Todo якщо не правилтна відповідь позначити її червоною
                    case result.answerId === answerId : {
                        status = result.userCorrect ? {
                            colorText: 'green--text',
                            color: 'green'
                        } : {colorText: 'red--text', color: 'red'}
                        break
                    }
                    case result.correctAnswerId === answerId : {
                        status = {colorText: 'green--text', color: 'green'}
                        break
                    }
                    default : {
                        status = {colorText: 'grey--text', color: 'grey'}
                    }
                }
                return status
            },
            toggleExplanation(index) {
                const explanationsShow = this.explanationsShow.slice()
                const state = explanationsShow[index]
                explanationsShow[index] = !state
                this.explanationsShow = explanationsShow
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                if (vm.getResultAnswers.length === 0) vm.$router.push({name: 'home'})
            })
        },
    }
</script>

<style scoped>

</style>
