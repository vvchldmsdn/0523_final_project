<template>
  <div>
    <h1>Article Detail</h1>
    <update-article :article="article"></update-article>
    <comment-list :comments="article.comments"></comment-list>
    <create-comment></create-comment>
  </div>
</template>

<script>
import UpdateArticle from '@/components/UpdateArticle.vue'
import CommentList from '@/components/CommentList.vue'
import CreateComment from '@/components/CreateComment.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ArticleDetail',
  components: { UpdateArticle, CommentList, CreateComment },
  data() {
    return {
      articlePk: this.$route.params.articlePk,
    }
  },
  computed: {
    ...mapGetters(['isAuthor', 'article']),
  },
  methods: {
    ...mapActions(['fetchArticle', 'likeArticle', 'deleteArticle',])
  },
  created() {
    this.fetchArticle(this.articlePk)
  }
}
</script>

<style>

</style>