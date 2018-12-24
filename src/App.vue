<template>
        <router-view/>
</template>

<script>
    import * as types from './store/actions.types'

    export default {
        name: 'App',
        mounted() {
            this.$store.dispatch(types.AUTH_REQUEST)
        }
    }
</script>


<style>
   img {
        max-width: 100%;
        height: auto;
    }
</style>
