import Vue from 'vue';
import Router from 'vue-router';
import FrontEnd from './views/FrontEnd.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'frontend',
      component: FrontEnd,
    },
  ],
});
