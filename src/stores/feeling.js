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
      background: 'rgb(134, 24, 24)',
      quoteBackground: 'rgb(158, 24, 24)',
      shadow: 'rgb(26, 0, 0)',
    },
    anxiousColors: {
      background: 'rgb(48, 6, 95)',
      quoteBackground: 'rgb(69, 11, 136)',
      shadow: 'rgb(28, 0, 31)',
    },
    sadColors: {
      background: 'rgb(24, 103, 134)',
      quoteBackground: 'rgb(30, 126, 163)',
      shadow: 'rgb(0, 19, 32)',
    },
    unmotivatedColors: {
      background: 'rgb(70, 7, 7)',
      quoteBackground: 'rgb(94, 9, 9)',
      shadow: 'rgb(28, 0, 0)',
    },
    boredColors: {
      background: 'rgb(21, 35, 54)',
      quoteBackground: 'rgb(29, 49, 77)',
      shadow: 'rgb(0, 0, 0)',
    },
    happyColors: {
      background: 'rgb(255, 255, 255)',
      quoteBackground: 'rgb(255, 166, 0)',
      shadow: 'rgb(34, 27, 0)',
    },
    excitedColors: {
      background: 'rgb(194, 78, 0)',
      quoteBackground: 'rgb(219, 90, 4)',
      shadow: 'rgb(34, 27, 0)',
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
 