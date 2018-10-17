<template>
  <b-container>
    <b-row>
      <b-col v-if="isAuthenticated" lg="5" class="mx-auto text-center">
        <h3>Welcome to Vue News Feed! </h3>
        <b-button class="btn btn-danger" @click="logout()">Log Out</b-button>
      </b-col>
      <b-col v-else lg="5" class="mx-auto">
         <b-card>
            <h6 slot="header" class="mb-0 text-center">Login</h6>
            <b-form>
              <b-form-group label="Username" label-for="username">
                  <b-form-input v-model="username" type="text" id="username"></b-form-input>
              </b-form-group>
              <b-form-group label="Password" label-for="password">
                <b-form-input v-model="password" type="password" id="password"></b-form-input>
              </b-form-group>
                <b-button @click="login()" variant="primary">Login</b-button>
              </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      profile: {},
    };
  },
  computed: {
    ...mapGetters('authenticationModule', ['isAuthenticated']),
  },
  created() {
    this.checkIfLogin();
  },
  watch: {
  },
  methods: {
    ...mapActions('authenticationModule', { logout: 'logout', checkIfLogin: 'checkIfLogin' }),
    login() {
      this.$store.dispatch('authenticationModule/login', { username: this.username, password: this.password })
        .then((data) => {
          if (data) {
            this.username = '';
            this.password = '';
          }
        });
    },
  },
};
</script>

<style>

</style>
