<template>
  <div>
    <h3>{{ profile.username }}님이 작성한 글</h3>
    <div id="articletitle" class="list-group">
      <ul>
        <li v-for="article in profile.articles" :key="article.pk">
          <router-link class="list-group-item list-group-item-action" style=text-decoration:none; :to="{ name: 'article', params: { articlePk: article.pk } }">
            {{ article.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <!-- <ul>
      <li v-for="article in profile.articles" :key="article.pk">
        <router-link :to="{ name: 'article', params: { articlePk: article.pk } }">
          {{ article.title }}
        </router-link>
      </li>
    </ul> -->
    
    <!-- {{ profile.username }}님이 좋아요 한 글
    <ul>
      <li v-for="article in profile.like_articles" :key="article.pk">
        <router-link :to="{ name: 'article', params: { articlePk: article.pk } }">
          {{ article.title }}
        </router-link>
      </li>
    </ul> -->
    <h3>{{ profile.username }}님이 좋아요 한 글</h3>
    <div id="articlelike" class="list-group">
      <ul>
        <li v-for="article in profile.like_articles" :key="article.pk">
          <router-link class="list-group-item list-group-item-action" style=text-decoration:none; :to="{ name: 'article', params: { articlePk: article.pk } }">
            {{ article.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UserArticleList',
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
li {
  list-style: none;
}

#articletitle {
  margin: auto;
  margin-top: 20px;
  width: 1000px;
}

#articlelike {
  margin: auto;
  margin-top: 20px;
  width: 1000px;
}

h3 {
  font-size: 25px;
  text-align: center;
  margin: auto;
  margin-top: 25px;
  padding: 10px;
  color: #fff;
  background: rgb(25,118,210);
  border-radius: 30px;
  width: 500px;
}
</style>