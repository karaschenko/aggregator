<template>
    <v-container>
        <v-layout row wrap>
            <v-flex v-for="article in news" lg3 md6 xs12>
                <NewsItem  :article="article"></NewsItem>
            </v-flex>
        </v-layout>

    </v-container>

</template>

<script>
    import NewsItem from './NewsItem.vue';
    import store from '../store/index';
    export default {
        components: {
            NewsItem
        },
        computed: {
            news() {
                return this.$store.getters['getNews'];
            }
        },
        created() {
            store.dispatch('fetchNews', {category: 'general', country: 'ua'});
        },

    }
</script>

<style lang="sass">
    .flex
        padding: 15px
</style>