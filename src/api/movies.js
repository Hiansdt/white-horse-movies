import axios from 'axios'

const auth = '9016c188f8f2c2c0c0876f34bfa03f0a'

export default class moviesApi {
    async getMovie() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${auth}&  with_genres=27
        `)
        return data
    }
}