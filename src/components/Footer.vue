<template>
    <v-footer
            dark
            height="auto"
    >
        <v-card
                class="flex"
                flat
                tile
        >
            <v-card-title class="teal">
                <strong class="subheading">Get connected with us on social networks! І тут ще якийсь текст</strong>

                <v-spacer></v-spacer>

                <v-btn
                        v-for="icon in [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]"
                        :key="icon"
                        class="mx-3"
                        dark
                        icon
                >
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-actions class="grey darken-3 justify-center">
                &copy;2018 — <strong>Wekings Bot</strong><span class="mx-1">|</span>
                Зроблено з любов'ю <v-icon class="ml-1" style="font-size: 14px;">fas fa-heart</v-icon>
                <v-icon class="mx-2" style="font-size: 14px;">fas fa-arrow-right</v-icon>
                <v-icon style="font-size: 14px;">fas fa-code</v-icon>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>
