<template>
  <b-card :title="post.title">
    <p class="card-text">
      {{post.content | dataSubstr}}
    </p>
    <em slot="footer" ><a  class="card-link" :href="post.link" target="_blank">Read More</a></em>
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
