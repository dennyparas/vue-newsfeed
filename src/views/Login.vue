<template>
  <b-container>
    <b-row>
      <b-col v-if="isAuthenticated" lg="5" class="mx-auto">
        <h3>Hello</h3>
        <p>Name: {{profile.firstName}}</p>
         <p>Favorite Sandwich: {{profile.favoriteSandwich}}</p>
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
import appService from './../app.service';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      isAuthenticated: false,
      profile: {},
    };
  },
  created() {
    const expiration = window.localStorage.getItem('tokenExpiration');
    const unixTimestamp = new Date().getTime() / 1000;
    if (expiration !== null && parseInt(expiration, 10) - unixTimestamp > 0) {
      this.isAuthenticated = true;
    }
  },
  watch: {
    isAuthenticated(val) {
      if (val) {
        appService.getProfile()
          .then((profile) => {
            this.profile = profile;
          });
      } else {
        this.profile = {};
      }
    },
  },
  methods: {
    login() {
      appService.login({ username: this.username, password: this.password })
        .then((data) => {
          window.localStorage.setItem('token', data.token);
          window.localStorage.setItem('tokenExpiration', data.expiration);
          this.isAuthenticated = true;
          this.username = '';
          this.password = '';
        })
        .catch(() => {
          window.alert('Could not login');
        });
    },
    logout() {
      window.localStorage.setItem('token', null);
      window.localStorage.setItem('tokenExpiration', null);
      this.isAuthenticated = false;
    },
  },
};
</script>

<style>

</style>
