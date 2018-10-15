import Vue from 'vue';
import Vuex from 'vuex';
import authenticationModule from './modules/authentication';
import postsModule from './modules/posts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authenticationModule,
    postsModule,
  },
});
