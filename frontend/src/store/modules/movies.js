import drf from '@/api/drf'
import router from '@/router'
import axios from 'axios'


export default {
  // namespaced: true,

  state: {
    movies: [],
    movie: {},
    fantasy_movies: [],
    related_movies: [],
  },
  getters: {
    movies: state => state.movies,
    movie: state => state.movie,
    fantasy_movies: state => state.fantasy_movies,
    related_movies: state => state.related_movies,
    isAuthor: (state, getters) => {
      return state.movieComment.user?.username === getters.currentUser.username
    },
  },
  mutations: {
    SET_MOVIES: (state, movies) => state.movies = movies,
    SET_MOVIE: (state, movie) => state.movie = movie,
    SET_MOVIE_COMMENTS: (state, movie_comments) => (state.movie.movie_comments = movie_comments),
    SET_RELATED_MOVIES: (state, related_movies) => state.related_movies = related_movies,
    SET_FANTASY_MOVIES: (state, fantasy_movies) => state.fantasy_movies = fantasy_movies
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
    createMovieComment({ commit, getters }, { moviePk, movieCommentContent }) {
      const movie_comment = { movieCommentContent }

      axios({
        url: drf.movies.movie_comments(moviePk),
        method: 'post',
        data: movie_comment,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    updateMovieComment({ commit, getters }, { moviePk, movieCommentPk, movieCommentContent }) {
      const movie_comment = { movieCommentContent }

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
            commit('SET_MOVIE_COMMENTS', res.data)
          })
          .catch(err => console.error(err.response))
      }
    },
  }
}
