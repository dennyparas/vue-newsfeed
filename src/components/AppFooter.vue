<template>
<footer class="footer">
  <b-container class="text-center">
    <span class="text-muted ">Vue Newsfeed</span>
  </b-container>
</footer>
</template>
<script>
export default {
  name: 'AppFooter',
};
</script>

<style>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 50px;
  line-height: 50px; /* Vertically center the text there */
  background-color: #f5f5f5;
}

</style>
