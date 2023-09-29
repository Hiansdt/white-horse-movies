import axios from 'axios'

const auth = import.meta.env.VITE_API_KEY

const auth_bearer = import.meta.env.VITE_API_BEARER

const config = {headers: {accept: 'application/json', Authorization: `Bearer ${auth_bearer}`,}}
export default class moviesApi {
    async getMovie() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${auth}&with_genres=16/`)
        return data
    }
    async getMovieImage(movie_id) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/images`, config)
        return data
    }
    async getMovieTrailer(movie_id) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, config)
        return data
    }
    async getGenres() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${auth}&language=en-US`)
        return data
    }
}