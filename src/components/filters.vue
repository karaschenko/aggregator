<template>
    <div class="filters">
        <v-card>
            <v-card-title>
                Filters
            </v-card-title>

            <v-select
                    :items="categories"
                    box
                    label="Choose category"
                    v-model="category"
                    value="2"
                    @change = "selectCategory(category)"
            ></v-select>

            <h2>{{category}}</h2>

            <v-select
                    :items="countries"
                    box
                    label="Choose country"
                    value="2"
                    v-model="country"
                    @change = "chooseCountry(country)"
            > </v-select>

            <h2>{{country}}</h2>
        </v-card>

        <v-card>
            <v-card-title>
                Search
            </v-card-title>

            <v-text-field v-model="searchString" @input="searchNews(searchString)"></v-text-field>


        </v-card>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                categories: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
                countries: [{text: 'Russia', value:'ru' }, {text: 'Ukraine', value: 'ua'} , {text: 'USA', value: 'us' }],
                country: 'ua',
                category: 'general',
                searchString: ''
            }
        },
        methods: {
            selectCategory(category) {
                console.log(category);
                this.$store.dispatch('fetchNews', {category: category, country: this.country});
            },

            chooseCountry(country) {
                this.$store.dispatch('fetchNews', {country: country, category: this.category});
            },

            searchNews(searchString) {
                this.$store.dispatch('searchNews', {newsSearch: searchString});
            }


        }

    }
</script>

<style scoped="true" lang="sass">
    .v-card__title
        font-size: 20px

    .v-card
        padding: 15px

</style>