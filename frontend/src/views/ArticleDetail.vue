<template>
  <div>
    <h1>게시글</h1>
    <!-- {{article}} -->
    <div class="card" id="articlecard">
      <router-link style=text-decoration:none; :to="{ name: 'profile', params: { username } }"><h5 class="card-header">{{ article.user.username }}</h5></router-link>
      <div class="card-body">
        <h5 id="c-title" class="card-title">{{ article.title }}</h5>
        <p id="c-content" class="card-text">{{ article.content}}</p>
        <div>  [작성] {{ article.created_at.slice(2, 10) }} ({{ article.created_at.slice(11, 16) }})</div>
        <div>  [수정] {{ article.updated_at.slice(2, 10) }} ({{ article.updated_at.slice(11, 16) }})</div>
        <!-- <div>작성일: {{ article.created_at.slice(0, 10) }} | 작성시각: {{ article.created_at.slice(11, 19) }}</div>
        <div>수정일: {{ article.updated_at.slice(0, 10) }} | 수정시각: {{ article.updated_at.slice(11, 19) }}</div> -->
      </div>
    </div>
    <!-- <h1>{{ article.title }}</h1>
    <p>
      {{ article.content}}
    </p>
     -->
    <!-- <div v-if="isAuthor">
      <router-link :to="{ name: 'articleUpdate', params: { articlePk } }">
        <button>Edit</button>
      </router-link>
      |
      <button @click="deleteArticle(articlePk)">Delete</button>
    </div>

    <div>
      Like:
      <button @click="likeArticle(articlePk)">{{ likeCount }}</button>
    </div>

    <comment-list :comments="article.comments"></comment-list> -->
     <div class="p-2" v-if="isAuthor">
  <router-link style=text-decoration:none; :to="{ name: 'articleUpdate', params: { articlePk } }">
    <v-btn
      color="blue lighten-1"
      depressed
    >
      Edit
    </v-btn>
      </router-link>
      |
       <v-btn @click="deleteArticle(articlePk)"
      color="amber darken-1"
      depressed
    >
      Delete
    </v-btn>
      <!-- <button @click="deleteArticle(articlePk)">Delete</button> -->
    </div>

    <div>
      <v-btn
      class="ma-2"
      text
      icon
      color="blue lighten-2"
      @click="likeArticle(articlePk)"
    >
      <v-icon>mdi-thumb-up</v-icon>{{ likeCount }}
    </v-btn>
      
      <!-- <button @click="likeArticle(articlePk)">{{ likeCount }}</button> -->
    </div>

    <comment-list :comments="article.comments"></comment-list>
     <router-link style=text-decoration:none; :to="{ name: 'articles' }">
      <div>커뮤니티로 돌아가기</div>
    </router-link>

  </div>
</template>

<script>
import CommentList from '@/components/CommentList.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ArticleDetail',
  components: { CommentList },
  data() {
    return {
      articlePk: this.$route.params.articlePk,
    }
  },
  computed: {
    ...mapGetters(['isAuthor', 'article']),
    likeCount() {
      return this.article.like_users?.length
    }
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
h5 {
  text-align: center;
  font-family: 'EliceDigitalBaeum-Bd'
}

p {  
  font-family: 'GmarketSansMedium'
}

#articlecard {
  width: 1000px; 
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>