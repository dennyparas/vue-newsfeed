<template>
<b-container>
  <AppCategory></AppCategory>
</b-container>
</template>
<script>
import AppCategory from './../components/AppCategory.vue';

export default {
  name: 'home',
  components: {
    AppCategory,
  },
};
</script>
<style>
.card-body {
  height: auto;
  min-height: 200px;
}
</style>

