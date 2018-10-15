<template>
<b-container>
  <b-row>
    <b-col lg="4" md="6" class="mb-2 mt-2"  v-for="post in posts" :key="post.id">
      <AppPost :post='post'></AppPost>
    </b-col>
  </b-row>
</b-container>
</template>
<script>
import AppPost from './../components/AppPost.vue';
import appService from './../app.service';

export default {
  name: 'home',
  components: {
    AppPost,
  },
  data() {
    return {
      id: this.$route.params.id,
      posts: [],
    };
  },
  created() {
    this.loadPost();
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
      this.loadPost();
    },
  },
  methods: {
    loadPost() {
      let categoryId = 2;
      if (this.id === 'mobile') {
        categoryId = 11;
      }

      appService.getPosts(categoryId).then((data) => {
        this.posts = data;
      });
    },
  },
};
</script>
<style>
.card-body {
  height: auto;
  min-height: 200px;
}
</style>

