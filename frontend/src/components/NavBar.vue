<template>
  <nav>

  <router-link :to="{ name: 'movies' }">영화목록</router-link> |

  <router-link :to="{ name: 'login' }">로그인</router-link> |

  <router-link :to="{ name: 'signup' }">회원가입</router-link> |

  <router-link :to="{ name: 'articles' }">articles</router-link>

  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style>

</style>