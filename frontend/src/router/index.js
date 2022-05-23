import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/HomeView.vue'

import ArticleList from '@/views/ArticleList.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'

import LoginView from '@/views/LoginView.vue'
import SignUp from '@/views/SignUp.vue'
import ProfileDetail from '@/views/ProfileDetail.vue'
import MovieList from '@/views/MovieList.vue'
import MovieDetail from '@/views/MovieDetail.vue'
import NotFound404 from '@/views/NotFound404.vue'

Vue.use(VueRouter)

const routes = [
  /*
  main?
    / => HomeView

  accounts
    /login => LoginView
    /signup => SignupView
    /profile/:username => ProfileDetail
  
  articles
    /articles => ArticleListView
    /articles/:articlePk => ArticleDetail
    /404 => NotFound404
    * => /404

  movies
    /movies => MovieList
    /movies/:moviePk => MovieDetail
  */
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: ProfileDetail
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticleList
  },
  {
    path: '/articles/:articlePk',
    name: 'article',
    component: ArticleDetail
  },
  {
    path: '/movies/',
    name: 'movies',
    component: MovieList
  },
  {
    path: '/movies/:moviePk',
    name: 'movie',
    component: MovieDetail
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Navigation Guard 설정 부분!
// router.beforeEach((to, from, next) => {
  
// })

export default router
