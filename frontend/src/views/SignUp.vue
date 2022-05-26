<template>
  <div>
    <h1>회원가입</h1>

    <account-error-list v-if="authError"></account-error-list>
      <form id="signup-form" @submit.prevent="signup(credentials)" style="display:inline-block;">
        <div>
          <div>
            <!-- <label for="username">ID</label> -->
            <input v-model="credentials.username" type="text" class="form-control" id="username" placeholder="ID" required>
          </div>
     
        <div id="pw1">
          <!-- <label for="password1">Password</label> -->
          <input v-model="credentials.password1" type="password" class="form-control" id="password1" placeholder="Password" required>
        </div>
       
        <div id="pw2">
          <!-- <label for="password2">Password Confirmation</label> -->
          <input v-model="credentials.password2" type="password" class="form-control" id="password2" placeholder="Password Confirmation" required>     
        </div>
       
        <button id="signup-btn" type="submit" class="btn btn-primary mb-3">Signup</button>
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
#signup-form {
  margin-top: 20px;
}

#pw1 {
  margin-top: 15px;
}

#pw2 {
  margin-top: 15px;
}

#signup-btn {
  margin-top: 15px;
}
</style>