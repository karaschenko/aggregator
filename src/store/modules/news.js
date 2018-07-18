import axios from 'axios'

const BASE_URL_SEARCH = 'https://newsapi.org/v2/everything?';
const BASE_URL = 'https://newsapi.org/v2/top-headlines?';
const API_KEY = 'f055867406c246b19d89095a368fc46a';

const initialState = {
    news : 'hello world',

};

const getters =  {
    getNews: state => state.news

};


const mutations = {
    setNews(state, news)  {
        state.news = news;
    }
};

const actions = {
    async fetchNews({commit}, query) {
        console.log(query);
        const category = query.category;
        const country = query.country;



        console.log('beforRequest', category, country);
        try {
            const data = await axios.get(BASE_URL+'country='+country+'&category='+category+'&apiKey='+API_KEY);
            console.log(data);
            commit('setNews', data.data.articles);
            return data;
        } catch (error) {
            return error;
        }


    },

    async searchNews({commit}, query) {
        const newsSearch = query.newsSearch;
        try {
            const searchRequest = await axios.get(BASE_URL_SEARCH+'q='+newsSearch+'&language\n'+
                '\n=en&language=ru&language=ua&apiKey='+API_KEY);
            console.log(searchRequest);
            commit('setNews', searchRequest.data.articles);
        } catch (error) {
            return error;
        }
    }
};

export default {
    state: initialState,
    getters,
    mutations,
    actions
}