const HOST = 'http://127.0.0.1:8000/api/v1/'

const ACCOUNTS = 'accounts/'
const ARTICLES = 'articles/'
const MOVIES = 'movies/'
const COMMENTS = 'comments/'

export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    // Token 으로 현재 user 판단
    currentUser: () => HOST + ACCOUNTS + 'user/',
    // user name 또는 user id로 프로필 제공
    profile: username => HOST + ACCOUNTS + 'profile/' + username,

  },
  articles: {
    articles: () => HOST + ARTICLES,
    article: articlePk => HOST + ARTICLES + `${articlePk}/`, 
    create_article: () => HOST + ARTICLES + 'create/',
    comments: articlePk => HOST + ARTICLES + `${articlePk}/` + COMMENTS,
    comment: (articlePk, commentPk) => HOST + ARTICLES + `${articlePk}/` + COMMENTS + `${commentPk}/`,
  },
  movies: {
    movies: () => HOST + MOVIES,
    related_recom: moviePk => HOST + MOVIES + `${moviePk}/` + 'recom/',
    genre_recom: genrePk => HOST + MOVIES + 'genre/' + `${genrePk}/`,
    movie_detail: moviePk => HOST + MOVIES + `${moviePk}/`,
    default_recom: () => HOST + MOVIES + 'default/',
    user_interest: (languagePk) => HOST + MOVIES + 'interest/' + `${languagePk}/`,
    movie_comments: moviePk => HOST + MOVIES + `${moviePk}/` + COMMENTS,
    movie_comment: (moviePk, movieCommentPk) => HOST + MOVIES + `${moviePk}/` + COMMENTS + `${movieCommentPk}/`,
  },
}