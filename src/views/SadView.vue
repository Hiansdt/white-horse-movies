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

const movieImages = ref()

async function getMovieAndQuote() {
    quote.value = await QuotesApi.getQuotes('happiness');
    movie.value =  await MoviesApi.getMovie();
    movie.value = movie.value.results[(Math.random() * movie.value.results.length).toFixed(0)];
    movieImages.value = await MoviesApi.getMovieImage(movie.value.id)
    console.log(movie.value)
}

onMounted(() => {
    getMovieAndQuote()
})

</script>

<template>
    <main>
        <div class="quoteContainer">
            <h1 v-if="quote">
                Here's a quote from {{ quote[0].author }} to hype you up:
            </h1>
            <div v-if="quote" class="quote">
                <p>" {{ quote[0].quote }} " </p>
            </div>
        </div>
        <hr>
        <div class="movieContainer">
            <h1 v-if="quote" class="recommendation">
                And here's a movie recommendation for you:
            </h1>
            <div class="movie" v-if="movieImages">
                <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="">
                <div class="movieInfo">
                    <h2 class="title">{{ movie.title }}</h2>
                    <p>{{ movie.overview }}</p>
                </div>
            </div>
        </div>
        <hr>
        <FooterComponentVue class="footer"/>
    </main>
</template>

<style scoped>

.quoteContainer {
    background-color: #005f66;
    color: white;
    width: 100%;
    text-align: center;
    padding: 1%;
}

hr {
    background-color: white;
    color: white;
}

.movieContainer {
    background-color: #005f66;
    width: 100%;
    padding: 1%;
    height: 75vh;
    text-align: center;
    color: white;
}

p {
    font-size: larger;
    text-align: center;
}

h2 {
    font-size: xx-large;
    color: rgb(255, 255, 255);
    margin-bottom: 10%;
}

main {
    width: 99%;
    height: 99%;
}

.movie {
    width: 90%;
    display: flex;
    text-align: center;
    margin-top: 3%;
}

.movieInfo {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
}

img {
    width: 415px;
    margin-left: 3%;
}

</style>