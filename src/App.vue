<template>
  <div id="app">
    <AppNavbar></AppNavbar>
    <section class="main section">
      <router-view></router-view>
    </section>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'app',
  components: {
    AppNavbar,
    AppFooter,
  },
  data() {
    return {

    };
  },
};
</script>
<style>
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}
.main {
      padding: 40px 15px 0;
}
</style>

