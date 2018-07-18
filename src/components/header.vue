<template>
    <header>
        <v-navigation-drawer fixed v-model="drawer" app>

            <v-list dense>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <filters></filters>

            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{title}}</v-toolbar-title>

        </v-toolbar>
    </header>
</template>

<script>
    import filters from './filters.vue'
    export default {
        data() {
            return {
                title: 'News Aggregator',
                drawer: null,
            }
        },
        components: {
            filters
        }

    }
</script>