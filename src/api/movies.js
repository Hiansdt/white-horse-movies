import axios from 'axios'

const auth = import.meta.env.VITE_API_KEY

const auth_bearer = import.meta.env.VITE_API_BEARER

const config = {headers: {accept: 'application/json', Authorization: `Bearer ${auth_bearer}`,}}
class moviesApi {
    async getMovie(genre) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`, config)
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

export default new moviesApi