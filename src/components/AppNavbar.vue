<template>
<b-navbar toggleable="md" type="dark" variant="info">
  <b-container>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand to="/">VueFeed</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/category/front-end" >Front End</b-nav-item>
        <b-nav-item :to="{ name: 'category' , params: { id: 'mobile'}}" >Mobile</b-nav-item>
        <b-nav-item @click='logout' v-if="isAuthenticated">Logout</b-nav-item>
        <b-nav-item v-else to="/login">Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-container>
</b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppNavbar',
  computed: {
    ...mapGetters('authenticationModule', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('authenticationModule', { logout: 'logout' }),
  },
};
</script>

<style>

</style>
