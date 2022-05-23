import router from '@/router'
import axios from 'axios'
// import drf from '@/api/drf'

export default {
  // namespaced: true,

  state: {
    movies: [],
    movie: {},
  },
  getters: {
    movies: state => state.movies,
    movie: state => state.movie,
  },
  mutations: {
    SET_MOVIES: (state, movies) => state.movies = movies,
    SET_MOVIE: (state, movie) => state.movie = movie,
    SET_MOVIE_COMMENTS: (state, movie_comments) => (state.movie.movie_comments = movie_comments)
  },
  actions: {
    fetchMovies({ commit }) {
      axios({
        url: 'http://localhost:8000/api/v1/movies/',
        method: 'get',
      })
      .then(res => { commit('SET_MOVIES', res.data)
      console.log(res.data)})
      .catch(err => console.error(err.response))
    },
    fetchMovie({ commit }, moviePk) {
      axios({
        url: `http://localhost:8000/api/v1/movies/${moviePk}`,
        method: 'get',
      })
        .then(res => commit('SET_MOVIE', res.data))
        .catch(err => {
          console.error(err.response)
          if (err.response.data === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },
    // createMovieComment({ commit, getters }, { moviePk, content }) {
    //   const movie_comment = { content }

    //   axios({
    //     url: drf.movies.movie_comments(moviePk),
    //     method: 'post',
    //     data: movie_comment,
    //     headers: getters.authHeader,
    //   })
    //     .then(res => {
    //       commit('SET_MOVIE_COMMENTS', res.data)
    //     })
    //     .catch(err => console.error(err.response))
    // },

    // updateMovieComment({ commit, getters }, { moviePk, movieCommentPk, content }) {
    //   const movie_comment = { content }

    //   axios({
    //     url: drf.movies.comment(moviePk, movieCommentPk),
    //     method: 'put',
    //     data: movie_comment,
    //     headers: getters.authHeader,
    //   })
    //     .then(res => {
    //       commit('SET_MOVIE_COMMENTS', res.data)
    //     })
    //     .catch(err => console.error(err.response))
    // },

    // deleteMovieComment({ commit, getters }, { moviePk, movieCommentPk }) {
    //   if (confirm('정말 삭제하시겠습니까?')) {
    //     axios({
    //       url: drf.movies.movie_comment(moviePk, movieCommentPk),
    //       method: 'delete',
    //       data: {},
    //       headers: getters.authHeader,
    //     })
    //       .then(res => {
    //         commist('SET_MOVIE_COMMENTS', res.data)
    //       })
    //       .catch(err => response.error(err.response))
    //   }
    },
  }
