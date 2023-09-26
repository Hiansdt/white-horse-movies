<script setup>
import FooterComponentVue from '../components/FooterComponent.vue';
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
    <main v-if="movieImages">
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
        <FooterComponentVue class="footer"/>
    </main>
</template>

<style scoped>

main{
    background-color: #005f66;
    color: white;
    height: fit-content;
}

.quoteContainer{
    width: 100%;
    height: 18%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1%;
}

.quote{
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-align: center;
}

.movieContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2%;
}

.movie {
    padding: 1%;
    display: flex;
}

.title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1%;
}

img {
    margin-top: -2%;
    width: 30%;
    margin-right: 5%;
}

.movieInfo {
    position: relative;
    top: -45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-align: center;
}

.movieInfo > p {
    width: 80%;
}

.recommendation {
    margin-bottom: 4%;
}

.footer > button {
    color: white;
    background-color: aqua;
}
</style>