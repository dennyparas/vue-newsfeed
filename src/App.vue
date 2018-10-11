<template>
  <div id="app">
    <AppNavbar></AppNavbar>
    <section class="main section">

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
