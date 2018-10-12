<template>
  <b-card :title="post.title">
    <p class="card-text">
      {{post.content}}
    </p>
    <em slot="footer" ><a  class="card-link" :href="post.link" target="_blank">Read More</a></em>
  </b-card>
</template>

<script>
export default {
  props: ['post'],
};
</script>

<style>

</style>
