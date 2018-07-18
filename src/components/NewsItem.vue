<template>
    <v-card>
        <v-card-media :src="article.urlToImage || '../src/assets/placeholder.png'" height="200px">
        </v-card-media>

        <v-card-title>
            <h3>{{article.title}}</h3>
            <p>
                {{article.description}}
            </p>
        </v-card-title>

        <v-card-actions>
            <a :href="article.url" target="_blank">source link</a>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props: {
            article: Object
        }
    }
</script>