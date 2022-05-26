<template>
  <!-- <div>
    <v-app id="app">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Signup</router-link>
      </nav>
      <router-view/>
    </v-app>
  </div> -->
   <v-app id="app">
      <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand><router-link id="bbnav" style=text-decoration:none; :to="{ name: 'home' }">
          HelloMovie
        </router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>    
        <b-nav-item><router-link id="bnav" style=text-decoration:none; :to="{ name: 'home' }">
          HOME
        </router-link></b-nav-item>    
         <b-nav-item><router-link id="bnav" style=text-decoration:none; :to="{ name: 'articles' }">
          COMMUNITY
        </router-link></b-nav-item>
        <b-nav-item v-if="isLoggedIn"><router-link id="bnav" style=text-decoration:none; :to="{ name: 'profile', params: {userName: profile.username} }">
          MY PAGE
        </router-link></b-nav-item>
        <b-nav-item v-if="!isLoggedIn"><router-link id="bnav" style=text-decoration:none; :to="{ name: 'signup' }">
          SIGNUP
        </router-link></b-nav-item>
         <b-nav-item v-if="isLoggedIn"><router-link id="bnav" style=text-decoration:none; :to="{ name: 'logout' }">
          LOGOUT
        </router-link></b-nav-item>
        <b-nav-item v-if="!isLoggedIn"><router-link id="bnav" style=text-decoration:none; :to="{ name: 'login' }">
          LOGIN
        </router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto form-row">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right> -->
          <!-- Using 'button-content' slot -->
          <!-- <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
   <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Signup</router-link>
    </nav> -->
    <router-view/>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions(['logout'])
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'currentUser', 'profile'])
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: white;
}

#bnav {
  color: white;
}

#bbnav {
  color: white;
}


@font-face {
    font-family: 'EliceDigitalBaeum_Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/EliceDigitalBaeum_Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'EliceDigitalBaeum-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_elice@1.0/EliceDigitalBaeum-Bd.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

h1 {
  text-align: center;
  font-size: 50px;
  font-family: 'EliceDigitalBaeum_Bold'
}



</style>
