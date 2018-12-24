<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-stepper darken v-model="step" vertical>
                    <template v-for="(item,index) in getQuestions">
                        <v-stepper-step :complete="step > (index + 1)" :step="index + 1" :key="`${index + 1}step`">
                            Питання:{{index +1}}
                        </v-stepper-step>

                        <v-stepper-content :step="index + 1" :key="`${index + 1}content`">
                            <v-card class="mb-5" style="border: 1px solid #ccc;">
                                <img width="100%" height="auto" :src="item.src" alt="Questions text">
                            </v-card>
                            <v-radio-group v-model="answerId" @change="handleRadios(item.id)">
                                <v-radio
                                        color="indigo"
                                        v-for="answer in item.answers"
                                        :key="answer.id"
                                        :value="answer.id">
                                    <div slot="label" class="blue-grey--text darken-4">
                                        <div>{{answer.text}}</div>
                                    </div>
                                </v-radio>
                            </v-radio-group>
                            <v-btn color="primary" :disabled="!String(answerId)" class="ml-0"
                                   @click="addAnswers(item)">
                                Далі
                            </v-btn>
                        </v-stepper-content>
                    </template>
                </v-stepper>
                <!-- needed then get width-->
                <v-stepper v-if="!gotWidth" vertical>
                    <v-stepper-step step="0"/>
                    <v-stepper-content step="0">
                        <v-card ref="blockImage" color="grey lighten-1" class="mb-5" height="200px"/>
                    </v-stepper-content>
                </v-stepper>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import * as types from '../store/actions.types'
    import {mapGetters} from 'vuex'

    export default {
        name: 'TestAnswers',
        data() {
            return {
                step: 2,
                gotWidth: false,
                answerId: '',
                questionId: '',
                answers: []
            }
        },
        computed: {
            ...mapGetters([
                'getQuestions',
                'isTestActive'
            ])
        },
        mounted() {
            this.reqQuestions()
        },
        methods: {
            reqQuestions() {
                const width = this.$refs.blockImage.$el.offsetWidth
                this.gotWidth = true
                this.$store.dispatch(types.GET_QUESTIONS, width).then(() => {
                    this.step = 1 // huck for stepper needed update state
                })
            },
            addAnswers() {
                const answers = this.answers.slice()
                answers.push({
                    answerId: this.answerId,
                    questionId: this.questionId
                })
                this.answers = answers
                this.step++
                this.answerId = ''
                this.questionId = ''
                if (this.step === this.getQuestions.length + 1) {
                    this.$bus.$emit('show-snackbar', 'Завантаження результатів', 'info')
                    this.$store.dispatch(types.END_TEST, this.answers).then(() => {
                        this.$bus.$emit('show-snackbar', 'Результати успішно завантаженні', 'success')
                    })
                }
            },
            handleRadios(questionId) {
                this.questionId = questionId
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                if (!vm.isTestActive) vm.$router.push({name: 'home'})
            })
        },
        beforeRouteLeave(to, from, next) {
            if (!this.isTestActive) return next()
            const result = confirm('Ви впевненні, що хочете покинути сторінку? Дані не будуть збережені')
            next(result)
        }
    }
</script>

<style scoped>

</style>
