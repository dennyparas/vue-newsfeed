<template>
  <b-card :title="post.title.rendered">
    <span class="card-text" v-html="this.$options.filters.dataSubstr(post.excerpt.rendered)"></span>
    <em slot="footer" ><a  class="card-link" :href="post.rest_api_enabler.Link" target="_blank">Read More</a></em>
  </b-card>
</template>

<script>
import Filters from './../filters/filters';

export default {
  props: ['post'],
  filters: {
    dataSubstr: Filters.dataSubstr,
  },
};
</script>

<style>

</style>
