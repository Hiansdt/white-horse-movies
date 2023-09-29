<script setup>
import FooterComponentVue from '../components/FooterComponent.vue';
import { ref, onMounted } from 'vue'
import quotesApi from '../api/quotes';
import moviesApi from '../api/movies';

const QuotesApi = new quotesApi();
const MoviesApi = new moviesApi();

const quote = ref();

const movie = ref();

const movieImages = ref();

const movieTrailer = ref();

const genres = ref()

const movieGenres = ref([])

async function getMovieAndQuote() {
    quote.value = await QuotesApi.getQuotes('happiness');
    movie.value = await MoviesApi.getMovie();
    movie.value = movie.value.results[(Math.random() * movie.value.results.length).toFixed(0)];
    movieTrailer.value = await MoviesApi.getMovieTrailer(movie.value.id)
    movieImages.value = await MoviesApi.getMovieImage(movie.value.id)
    genres.value = await MoviesApi.getGenres()
    console.log(movie.value)
    console.log(genres.value)

    for (let video of movieTrailer.value.results) {
        if (video.type === 'Trailer') {
            movieTrailer.value = video.key;
        }
    }

    for (let genre of movie.value.genre_ids) {
        for (let genreName of genres.value.genres) {
            if (genre === genreName.id) {
                movieGenres.value = [...movieGenres.value, genreName.name]
            }
        }
    }
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
                <h2 class="title">{{ movie.title }}</h2>
                <div class="genres">
                    <p v-for="genre, index of movieGenres">{{ genre }}</p>
                </div>
                <div class="imageTrailer">
                    <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="">
                    <iframe :src="'https://www.youtube.com/embed/' + movieTrailer" title="YouTube video player" frameborder="0" 
                        allowfullscreen>
                    </iframe>
                </div>
                <h2 class="synopsis">Synopsis</h2>
                <p>{{ movie.overview }}</p>
            </div>
        </div>
        <FooterComponentVue class="hovered" />
    </main>
</template>

<style scoped>
main {
    background-color: #005f66;
    color: white;
    height: fit-content;
}

.quoteContainer {
    width: 100%;
    height: 18%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1%;
}

.genres {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 15%;
    margin-bottom: 1%;
    gap: 2%;
}

.quote {
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-align: center;
}

.movieContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2%;
}

.synopsis {
    font-size: x-large;
    font-weight: bold;
    text-align: left;
    margin-left: 15%;
    margin-bottom: 1%;
}

.movie {
    padding: 1%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-content: center;
}

.movie > p {
    width: 60%;
    margin-left: 15%;
    text-align: left;
}

.title {
    font-size: x-large;
    font-weight: bolder;
    margin-bottom: 1%;
    margin-left: 15%;
    text-align: left;
}

.imageTrailer {
    margin-bottom: 3%;
    gap: 10px;
}

img {
    width: 20%;
    height: 100%;
}

iframe {
    height: 100%;
    width: 50%;
    margin-left: 1%;
}

.recommendation {
    margin-bottom: 3%;
    margin-top: 4%;
}

.hovered>button {
    color: rgb(255, 255, 255);
    background-color: aqua;
}

.hovered {
    position: relative;
}
</style>