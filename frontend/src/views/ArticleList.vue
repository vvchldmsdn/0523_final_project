<template>
  <div>
    <h1>Article List</h1>
    <ul>
      <li v-for="article in articles" :key="article.pk">
        {{ article.user.username }} :

        <router-link :to="{ name: 'article', params: {articlePk: article.pk} }">
          {{ article.title }}
        </router-link>
      </li>
    </ul>
    <create-article></create-article>
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