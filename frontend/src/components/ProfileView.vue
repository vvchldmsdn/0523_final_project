<template>
  <div>
    {{ currentUser.username }}님 안녕하세요!
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex' 

export default {
  name: 'ProfileView',
  computed: {
    ...mapGetters(['profile', 'currentUser'])
  },
    methods: {
    ...mapActions(['fetchProfile'])
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  }
}
</script>

<style>

</style>