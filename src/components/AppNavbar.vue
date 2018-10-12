<template>
<b-navbar toggleable="md" type="dark" variant="info">
  <b-container>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand to="/">VueFeed</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/category/front-end" >Front End</b-nav-item>
        <b-nav-item to="/category/mobile" >Mobile</b-nav-item>
        <b-nav-item to="/login">Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-container>
</b-navbar>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style>

</style>
