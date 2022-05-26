<template>
  <div>
    <h1>{{ profile.username }} 님의 페이지</h1><hr>
    <profile-info></profile-info>
    <user-article-list></user-article-list>
  </div>
</template>

<script>
import UserArticleList from '@/components/UserArticleList.vue'
import ProfileInfo from '@/components/ProfileInfo.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProfileDetail',
  components: { UserArticleList, ProfileInfo },
  computed: {
    ...mapGetters(['profile'])
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
div h1 {
  margin-top: 25px;
}
</style>