<template>
    <v-container>
        <v-layout wrap>
            <v-flex tag="h2" class="display-1 white px-3 py-3 elevation-1 mb-3">Фармацевти</v-flex>
        </v-layout>
        <v-layout wrap>
            <v-flex>
                <pharmacists-table/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import PharmacistsTable from './components/PharmacitstsTable'

    export default {
        name: 'Pharmacists',
        components: {
            PharmacistsTable
        }
    }
</script>

<style scoped>

</style>
