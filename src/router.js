import Vue from 'vue';
import Router from 'vue-router';
import Category from './views/Category.vue';
import Login from './views/Login.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/category/front-end',
    },
    {
      path: '/category/:id',
      name: 'category',
      component: Category,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});
