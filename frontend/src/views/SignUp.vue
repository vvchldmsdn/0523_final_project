<template>
  <div>
    <h1>회원가입</h1>

    <account-error-list></account-error-list>

    <form @submit.prevent="signup(credentials)">
      <div>
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
      </div>
      <div>
        <button>Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AccountErrorList from '@/components/AccountErrorList.vue'

export default {
  components: {
    AccountErrorList,
  },
  name: 'SignUp',
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