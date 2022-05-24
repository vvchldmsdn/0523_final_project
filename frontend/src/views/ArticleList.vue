<template>
  <div>
    <h1>커뮤니티</h1>
    <ul>
      <li v-for="article in articles" :key="article.pk">
        <router-link :to="{ name: 'profile', params: {userName: article.user.username} }">
          {{ article.user.username }}
        </router-link>
        :
        <router-link :to="{ name: 'article', params: {articlePk: article.pk} }">
          {{ article.title }}
        </router-link>
        좋아요 수 {{ article.like_count }} | 댓글 수 {{ article.comment_count}} 
      </li>
    </ul>
    <create-article :article="article"></create-article>
  </div>
</template>

<script>
import CreateArticle from '@/components/CreateArticle.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ArticleList',
  components: { CreateArticle },
  data() {
    return {
      article: {
        pk: null,
        title: '',
        content: '',
      }
    }
  },
  computed: {
    ...mapGetters(['articles'])
  },
  methods: {
    ...mapActions(['fetchArticles'])
  },
  created() {
    this.fetchArticles()
  },
}
</script>

<style>

</style>