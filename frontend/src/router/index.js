import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/HomeView.vue'

import ArticleList from '@/views/ArticleList.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import ArticleUpdate from '@/views/ArticleUpdate.vue'

import LoginView from '@/views/LoginView.vue'
import LogoutView from '@/views/LogoutView.vue'
import SignUp from '@/views/SignUp.vue'
import ProfileDetail from '@/views/ProfileDetail.vue'
import MovieDetail from '@/views/MovieDetail.vue'
import NotFound404 from '@/views/NotFound404.vue'
import store from '@/store'

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
    path: '/logout',
    name: 'logout',
    component: LogoutView
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
    path: '/articles/:articlePk/update',
    name: 'articleUpdate',
    component: ArticleUpdate
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

router.beforeEach((to, from, next) => {
  store.commit('SET_AUTH_ERROR', null)

  const { isLoggedIn } = store.getters

  const noAuthPages = ['login', 'signup']

  const isAuthRequired = !noAuthPages.includes(to.name)

  if (isAuthRequired && !isLoggedIn) {
    alert('Require Login! Redirecting..')
    next({ name: 'login' })
  } else {
    next()
  }

  if (!isAuthRequired && isLoggedIn) {
    next({ name: 'home' })
  }
})

export default router
