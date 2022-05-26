<template>
  <div>
    <h1>커뮤니티</h1>
    <ul id="commu" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <li v-for="article in articles" :key="article.pk">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">제목: <router-link style=text-decoration:none; :to="{ name: 'article', params: {articlePk: article.id} }">
          {{ article.title }}
        </router-link></h5>
            <h6 class="card-subtitle mb-2 text-muted"><b-avatar size="sm"></b-avatar> <router-link style=text-decoration:none; :to="{ name: 'profile', params: {username: article.user.username} }">
          {{ article.user.username }}
        </router-link></h6>
         <div>{{ article.created_at.slice(0, 10) }}</div>
            <p class="card-text"></p>
               <!-- <v-btn
              icon
              color="pink"
            > -->
              <v-icon dense color="pink">mdi-heart</v-icon>{{ article.like_count }}
            <!-- </v-btn> -->

              <v-icon
              id="comm"
                dense
                color="blue darken-2"
              >
                mdi-message-text
              </v-icon>{{ article.comment_count }}
          </div>
        </div>
      </li>
    </ul>
    <!-- <ul> -->
      <!-- <li v-for="article in articles" :key="article.pk">
        <router-link style=text-decoration:none; :to="{ name: 'profile', params: {username: article.user.username} }">
          {{ article.user.username }}
        </router-link>
        :
        <router-link style=text-decoration:none; :to="{ name: 'article', params: {articlePk: article.pk} }">
          {{ article.title }}
        </router-link>
        좋아요 수 {{ article.like_count }} | 댓글 수 {{ article.comment_count}} 
      </li>
    </ul> -->
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
#comm {
  margin-left: 5px;
}

#commu {
  margin-top: 5px;
  margin-bottom: 50px;
}
</style>