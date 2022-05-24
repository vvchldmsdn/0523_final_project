<template>
  <div>
    <h1>{{ profile.username }}'s 페이지</h1>
    <profile-info></profile-info>
    <user-article-list></user-article-list>
    <user-interest></user-interest>
  </div>
</template>

<script>
import UserArticleList from '@/components/UserArticleList.vue'
import UserInterest from '@/components/UserInterest.vue'
import ProfileInfo from '@/components/ProfileInfo.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProfileDetail',
  components: { UserArticleList, UserInterest, ProfileInfo },
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

</style>