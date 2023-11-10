import { defineStore } from 'pinia'
import quotesApi from '@/api/quotes'
import moviesApi from '../api/movies'
import { ref } from 'vue'

export const useFeelingStore = defineStore('feeling', {
  state: () => ({
    feeling: null,
    movie: null,
    quote: null,
    trailer: null,
    image: null,
    allGenres: null,
    movieGenres: [],
    background: null,
    quoteBackground: null,
    shadow: null,

    angryColors: {
      background: 'red',
      quoteBackground: '#f79d65',
      shadow: '#b25f0d',
    },
    anxiousColors: {
      background: '#86ccd1',
      quoteBackground: '#4aa4aa',
      shadow: '#0d484d',
    },
    sadColors: {
      background: '#86ccd1',
      quoteBackground: '#4aa4aa',
      shadow: '#0d484d',
    },
    unmotivatedColors: {
      background: '#86ccd1',
      quoteBackground: '#4aa4aa',
      shadow: '#0d484d',
    },
    boredColors: {
      background: '#86ccd1',
      quoteBackground: '#4aa4aa',
      shadow: '#0d484d',
    },
    happyColors: {
      background: '#86ccd1',
      quoteBackground: '#4aa4aa',
      shadow: '#0d484d',
    },
    excitedColors: {
      background: '#86ccd1',
      quoteBackground: '#4aa4aa',
      shadow: '#0d484d',
    },
  }),

  actions: {
    async getInfo() {
      this.movieGenres = []

      if (this.feeling == 'SAD') {
        const quoteData = await quotesApi.getQuotes('happiness')
        this.quote = quoteData

        const movieData = await moviesApi.getMovie()
        this.movie = movieData

        this.background = this.sadColors.background;
        this.quoteBackground = this.sadColors.quoteBackground;
        this.shadow = this.sadColors.shadow;

      } else if (this.feeling == 'ANGRY') {
        const quoteData = await quotesApi.getQuotes('happiness')
        this.quote = quoteData

        const movieData = await moviesApi.getMovie()
        this.movie = movieData

        this.background = this.angryColors.background;
        this.quoteBackground = this.angryColors.quoteBackground;
        this.shadow = this.angryColors.shadow;

      } else if (this.feeling == 'ANXIOUS') {
        const quoteData = await quotesApi.getQuotes('happiness')
        this.quote = quoteData

        const movieData = await moviesApi.getMovie()
        this.movie = movieData


        this.background = this.anxiousColors.background;
        this.quoteBackground = this.anxiousColors.quoteBackground;
        this.shadow = this.anxiousColors.shadow;

      } else if (this.feeling == 'UNMOTIVATED') {
        const quoteData = await quotesApi.getQuotes('happiness')
        this.quote = quoteData

        const movieData = await moviesApi.getMovie()
        this.movie = movieData

        this.background = this.unmotivatedColors.background;
        this.quoteBackground = this.unmotivatedColors.quoteBackground;
        this.shadow = this.unmotivatedColors.shadow;


      } else if (this.feeling == 'BORED') {
        const quoteData = await quotesApi.getQuotes('happiness')
        this.quote = quoteData

        const movieData = await moviesApi.getMovie()
        this.movie = movieData


        this.background = this.boredColors.background;
        this.quoteBackground = this.boredColors.quoteBackground;
        this.shadow = this.boredColors.shadow;

      } else if (this.feeling == 'HAPPY') {
        const quoteData = await quotesApi.getQuotes('happiness')
        this.quote = quoteData

        const movieData = await moviesApi.getMovie()
        this.movie = movieData

        this.background = this.happyColors.background;
        this.quoteBackground = this.happyColors.quoteBackground;
        this.shadow = this.happyColors.shadow;


      } else if (this.feeling == 'EXCITED') {
        const quoteData = await quotesApi.getQuotes('happiness')
        this.quote = quoteData

        const movieData = await moviesApi.getMovie()
        this.movie = movieData

        this.background = this.excitedColors.background;
        this.quoteBackground = this.excitedColors.quoteBackground;
        this.shadow = this.excitedColors.shadow;
      } else {
        this.background = null;
        this.quoteBackground = null;
        this.shadow = null;
      }

      this.movie = this.movie.results[(Math.random() * this.movie.results.length).toFixed(0)]

      const trailerData = await moviesApi.getMovieTrailer(this.movie.id)
      this.trailer = trailerData

      const imageData = await moviesApi.getMovieImage(this.movie.id)
      this.image = imageData

      const genreData = await moviesApi.getGenres()
      this.allGenres = genreData

      for (let video of this.trailer.results) {
        if (video.type === 'Trailer') {
          this.trailer = video.key
        }
      }

      for (let genre of this.movie.genre_ids) {
        for (let genreName of this.allGenres.genres) {
          if (genre === genreName.id) {
            this.movieGenres = [...this.movieGenres, genreName.name]
          }
        }
      }
    },
  }
})
 