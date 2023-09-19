<script setup>
import FooterComponentVue from '../components/FooterComponent.vue';
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue'
import quotesApi from '../api/quotes';
import moviesApi from '../api/movies';

const QuotesApi = new quotesApi();
const MoviesApi = new moviesApi();

const quote = ref()

const movie = ref()

async function getMovieAndQuote() {
    quote.value = await QuotesApi.getQuotes('happiness');
    movie.value =  await MoviesApi.getMovie();
    movie.value = movie.value.results[(Math.random() * movie.value.results.length).toFixed(0)];
}

onMounted(() => {
    getMovieAndQuote()
})

</script>

<template>
    <main>
        <h1 v-if="quote">
            Here's a quote from {{ quote[0].author }} to hype you up:
        </h1>
        <div v-if="quote" class="quote">
            <p>" {{ quote[0].quote }} " </p>
        </div>
        <h1 v-if="quote" class="recommendation">
            And here's a movie recommendation for you:
        </h1>
        <div class="movie" v-if="movie">
            {{ movie.title }}
        </div>
        <FooterComponentVue />
    </main>
</template>

<style scoped>

p {
    font-size: larger;
    text-align: center;
}

.recommendation {
    margin-top: 5%;
}

main {
    width: 100%;
    height: 100%;
}

</style>