import drf from '@/api/drf'
import router from '@/router'
import axios from 'axios'


export default {
  // namespaced: true,

  state: {
    movies: [],
    movie: {},
    fantasy_movies: [],
    animations_movies: [],
    sf_movies: [],
    related_movies: [],
    rate_average: {},
    rate_check: {},
  },
  getters: {
    movies: state => state.movies,
    movie: state => state.movie,
    fantasy_movies: state => state.fantasy_movies,
    animation_movies: state => state.fantasy_movies,
    sf_movies: state => state.sf_movies,
    related_movies: state => state.related_movies,
    isAuthor: (state, getters) => {
      return state.movieComment.user?.username === getters.currentUser.username
    },
    rate_average: state => state.rate_average,
    rate_check: state => state.rate_check,
  },
  mutations: {
    SET_MOVIES: (state, movies) => state.movies = movies,
    SET_MOVIE: (state, movie) => state.movie = movie,
    SET_MOVIE_COMMENTS: (state, movie_comments) => (state.movie.movie_comments = movie_comments),
    SET_RELATED_MOVIES: (state, related_movies) => state.related_movies = related_movies,
    SET_FANTASY_MOVIES: (state, fantasy_movies) => state.fantasy_movies = fantasy_movies,
    SET_ANIMATION_MOVIES: (state, animation_movies) => state.animation_movies = animation_movies,
    SET_SF_MOVIES: (state, sf_movies) => state.sf_movies = sf_movies,
    SET_RATE_AVERAGE: (state, rate_average) => state.rate_average = rate_average,
    SET_MOVIE_RATE: (state, movie_rate) => (state.movie.ratings = movie_rate),
    SET_RATE_CHECK: (state, rate_check) => (state.rate_check = rate_check),
  },
  actions: {
    fetchMovies({ commit }) {
      axios({
        url: drf.movies.default_recom(),
        method: 'get',
      })
      .then(res => commit('SET_MOVIES', res.data))
      .catch(err => console.error(err.response))
    },

    fetchMovie({ commit }, moviePk) {
      axios({
        url: drf.movies.movie_detail(moviePk),
        method: 'get',
      })
        .then(res => commit('SET_MOVIE', res.data))
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },
    
    fetchRelatedRecom({ commit }, moviePk) {
      axios({
        url: drf.movies.related_recom(moviePk),
        method: 'get',
      })
        .then(res => commit('SET_RELATED_MOVIES', res.data))
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },

    fetchFantasyMovies({ commit }) {
      axios({
        url: drf.movies.genre_recom(14),
        method: 'get',
      })
      .then(res => commit('SET_FANTASY_MOVIES', res.data))
      .catch(err => {
        console.error(err.response)
        if (err.response.status === 404) {
          router.push({ name: 'NotFound404' })
        }
      })
    },

    fetchAnimationMovies({ commit }) {
      axios({
        url: drf.movies.genre_recom(16),
        method: 'get',
      })
      .then(res => commit('SET_ANIMATION_MOVIES', res.data))
      .catch(err => {
        console.error(err.response)
        if (err.response.status === 404) {
          router.push({ name: 'NotFound404' })
        }
      })
    },

    fetchSfMovies({ commit }) {
      axios({
        url: drf.movies.genre_recom(878),
        method: 'get',
      })
      .then(res => commit('SET_SF_MOVIES', res.data))
      .catch(err => {
        console.error(err.response)
        if (err.response.status === 404) {
          router.push({ name: 'NotFound404' })
        }
      })
    },

    createMovieComment({ commit, getters }, { moviePk, content }) {
      // const movie_comment = { movieCommentContent }

      axios({
        url: drf.movies.movie_comments(moviePk),
        method: 'post',
        data: { 'content': content},
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    updateMovieComment({ commit, getters }, { moviePk, movieCommentPk, content }) {
      const movie_comment = { content }

      axios({
        url: drf.movies.movie_comment(moviePk, movieCommentPk),
        method: 'put',
        data: movie_comment,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    deleteMovieComment({ commit, getters }, { moviePk, movieCommentPk }) {
      if (confirm('정말 삭제하시겠습니까?')) {
        axios({
          url: drf.movies.movie_comment(moviePk, movieCommentPk),
          method: 'delete',
          data: {},
          headers: getters.authHeader,
        })
          .then(res => {
            console.log('완료')
            commit('SET_MOVIE_COMMENTS', res.data)
          })
          .catch(err => console.error(err.response))
      }
    },

    fetchRate({ commit, getters }, moviePk) {
      axios({
        url: drf.movies.movie_rate(moviePk),
        method: 'get',
        headers: getters.authHeader,
      })
      .then(res => {
        commit('SET_RATE_AVERAGE', res.data)
      })
      .catch(err => {
        console.error(err.response)
        if (err.response.status === 404) {
          router.path({name: 'NotFound404'})
        }
      })
    },

    createMovieRate({ commit, getters }, { moviePk, rates }) {
      axios({
        url: drf.movies.movie_rate(moviePk),
        method: 'post',
        data: {'rates': rates},
        headers: getters.authHeader,
      })
      .then(res => {
        commit('SET_MOVIE_RATE', res.data)
      })
      .catch(err => console.error(err.response))
    },

    setRateCheck({ commit, getters}, moviePk) {
      axios({
        url: drf.movies.rate_check(moviePk),
        method: 'get',
        headers: getters.authHeader,
      })
      .then(res => {
        commit('SET_RATE_CHECK', res.data)
      })
      .catch(err => {console.error(err.response)})
    }
  }
}
