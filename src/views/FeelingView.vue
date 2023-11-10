<script setup>
import FooterComponentVue from '../components/FooterComponent.vue';
import { ref, onMounted } from 'vue'
import { useFeelingStore } from '@/stores/feeling'
import { useRoute } from 'vue-router';

const feelingStore = new useFeelingStore()

const route = useRoute();

const quote = ref();

const movie = ref();

const movieImages = ref();

const movieTrailer = ref();

const movieGenres = ref([])

const currentRoute = ref(route.matched[0].name)

feelingStore.feeling = currentRoute.value.toUpperCase()

console.log(currentRoute.value.toUpperCase())

onMounted(() => {
    feelingStore.getInfo().then(() => {
        quote.value = feelingStore.quote;
        movie.value = feelingStore.movie;
        movieImages.value = feelingStore.image;
        movieTrailer.value = feelingStore.trailer;
        movieGenres.value = feelingStore.movieGenres;
    })
})

</script>

<template>
    <main v-if="movieImages" :style="`background-color:${feelingStore.background}`">
        <div class="quoteContainer">
            <h1 v-if="quote">
                Here's a quote from {{ quote[0].author }} to hype you up:
            </h1>
            <div v-if="quote" class="quote" :style="`background-color:${feelingStore.quoteBackground}; box-shadow: 15px 20px ${feelingStore.shadow}`">
                <p>" {{ quote[0].quote }} " </p>
            </div>
        </div>
        <div class="movieContainer">
            <h1 v-if="quote" class="recommendation">
                And here's a movie recommendation for you:
            </h1>
            <div class="movie" v-if="movieImages" :style="`background-color:${feelingStore.quoteBackground}; box-shadow: 15px 20px ${feelingStore.shadow}`">
                <h2 class="title">{{ movie.title }}</h2>
                <div class="genres">
                    <p v-for="genre, index of movieGenres" :key="index">{{ genre }}</p>
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
    margin-bottom: 2%;
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
    padding: 1%;
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
    margin-bottom: 6%;
}

.synopsis {
    font-size: x-large;
    font-weight: bold;
    text-align: left;
    margin-left: 15%;
    margin-bottom: 1%;
}

.movie {
    padding: 3%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-content: center;
    width: 75%;
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
    display: flex;
    align-content: center;
    justify-content: center;
}

img {
    width: 20%;
    height: 100%;
}

iframe {
    width: 50%;
    margin-left: 1%;
}

.recommendation {
    margin-bottom: 3%;
    margin-top: 4%;
}

.hovered>:nth-last-child(n + 2):hover {
    background-color: #ffffff0a;
    box-shadow: 5px 5px #0e0e0e;
}

.hovered>:nth-last-child(n + 2) {
    color: white;
    transition: all 0.35s ease-in-out;
}

.hovered {
    position: relative;
    color: white;
}
</style>