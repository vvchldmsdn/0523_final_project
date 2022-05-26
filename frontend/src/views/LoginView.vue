<template>
  <div>
    <h1>로그인</h1>

    <account-error-list v-if="authError"></account-error-list>

    <form class="form-horizontal" @submit.prevent="login(credentials)" style="display:inline-block;">
       <div class="form-inline form-group" id="user-id">
        <!-- <label for="username">user ID</label> -->
        <input v-model="credentials.username" type="text" class="form-control" id="username" placeholder="ID" required>

      <div class="col-auto">
        <!-- <label for="password">Password</label> -->
        <input v-model="credentials.password" type="password" class="form-control" id="password" placeholder="Password" required>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">Login</button>
      </div>
      </div>
    </form>  
    <!-- <form @submit.prevent="login(credentials)">
      <div>
        <label for="username">userId: </label>
        <input v-model="credentials.username" type="text" id="username" required />
      </div>
      <div>
        <label for="password">password: </label>
        <input v-model="credentials.password" type="password" id="password" required />
      </div>

      <button>로그인</button>
    </form> -->
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import AccountErrorList from '@/components/AccountErrorList.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LoginView',
  components: {
    AccountErrorList,
  },
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      }
    }
  },
  computed: {
    ...mapGetters(['authError'])
  },
  methods: {
    ...mapActions(['login'])
  },
}
</script>

<style>
#user-id {
  margin-top: 20px;
}
</style>