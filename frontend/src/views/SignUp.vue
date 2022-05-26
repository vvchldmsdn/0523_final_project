<template>
  <div>
    <h1>회원가입</h1>

    <account-error-list v-if="authError"></account-error-list>

    <form @submit.prevent="signup(credentials)">
      <!-- <div>
        <label for="username">ID: </label>
        <input v-model="credentials.username" type="text" id="username" required />
      </div>
      <div>
        <label for="password1">Password1: </label>
        <input v-model="credentials.password1" type="password" id="password1" required />
      </div>
      <div>
        <label for="password2">Password2: </label>
        <input v-model="credentials.password2" type="password" id="password2" required />
      </div> -->
      <div>
        <button>Signup</button>
      </div>
    </form>
    <form class="row g-3" @submit.prevent="signup(credentials)">
       <div class="col-auto">
        ID
      </div>
      <p class="col-auto">
        <label for="username" class="visually-hidden">ID</label>
        <input v-model="credentials.username" type="text" class="form-control" id="username" placeholder="ID" required>
      </p>
      <p class="col-auto">
        Password1
      </p>
      <div class="col-auto">
        <label for="password1" class="visually-hidden">Password</label>
        <input v-model="credentials.password1" type="password" class="form-control" id="password1" placeholder="Password" required>
      </div>
       <p class="col-auto">
        Password2
      </p>
      <div class="col-auto">
        <label for="password2" class="visually-hidden">Password</label>
        <input v-model="credentials.password2" type="password" class="form-control" id="password2" placeholder="Password" required>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AccountErrorList from '@/components/AccountErrorList.vue'

export default {
  name: 'SignUp',
  components: {
    AccountErrorList,
  },
  data() {
    return {
      credentials: {
        username: '',
        password1: '',
        password2: '',
      }
    }
  },
  computed: {
   ...mapGetters(['authError'])
  },
  methods: {
    ...mapActions(['signup'])
  },
}
</script>

<style>

</style>