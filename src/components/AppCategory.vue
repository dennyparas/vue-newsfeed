<template>
<b-row>
  <b-col lg="4" md="6" class="mb-2 mt-2"  v-for="post in posts" :key="post.id">
    <AppPost :post='post'></AppPost>
  </b-col>
</b-row>
</template>

<script>
import AppPost from './AppPost.vue';

export default {
  name: 'AppCategory',
  components: {
    AppPost,
  },
  data() {
    return {
      id: this.$route.params.id,
      postFrontEnd: [
        {
          id: 1, title: 'PWA Stats', content: 'A community-driven list of stats and news related to Progressive Web Apps', link: 'https://www.pwastats.com/',
        },
        {
          id: 2, title: 'A Comprehensive Guide To HTTP/2 Server Push', content: 'No longer is HTTP/2 a feature we pine for. It has arrived, and with it comes server push!', link: 'https://www.smashingmagazine.com/2017/04/guide-http2-server-push/',
        },
        {
          id: 3, title: 'So what’s this GraphQL thing I keep hearing about?', content: 'Why now is the perfect time to learn what exactly this GraphQL thing you keep hearing about really is.', link: 'https://medium.freecodecamp.com/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf',
        },
      ],
      postMobile: [
        {
          id: 4, title: 'State of The Mobile Gap Between Native and Web', content: 'Clearly PhoneGap, and Cordova are still required today in the mobile world, but when is it really needed? Did the web ever catch up?', link: 'https://remysharp.com/2016/05/28/state-of-the-gap',
        },
        {
          id: 5, title: 'Learning JavaScript Design Patterns', content: 'Design patterns are reusable solutions to commonly occurring problems in software design.', link: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book/',
        },
        {
          id: 6, title: 'The Power of Custom Directives in Vue', content: 'The beautiful thing about Vue is that it\'s incredibly feature-rich.', link: 'https://css-tricks.com/power-custom-directives-vue/',
        },
      ],
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
      if (this.id === 'front-end') {
        this.posts = this.postFrontEnd;
      } else {
        this.posts = this.postMobile;
      }
    },
  },
};
</script>

<style>

</style>
