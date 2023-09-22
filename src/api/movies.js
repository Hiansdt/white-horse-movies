import axios from 'axios'

const auth = '9016c188f8f2c2c0c0876f34bfa03f0a'

export default class moviesApi {
    async getMovie() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${auth}&with_genres=27
        `)
        return data
    }
    async getMovieImage(movie_id) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/images`, {headers: {accept: 'application/json', Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDE2YzE4OGY4ZjJjMmMwYzA4NzZmMzRiZmEwM2YwYSIsInN1YiI6IjY1MDQ2ODdmZDdkY2QyMDBhY2IyNjBhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TVohx1ab_3q-J-PZp1ZtP1usWDKm-AEmr5PRV2tHh_0',}})
        return data
    }
}