import appService from './../../app.service';

const state = {
  posts: [],
  categoryId: 0,
};

const mutations = {
  updateCategory: (state, category) => {
    state.categoryId = category.categoryId;
    state.posts = category.posts;
  },
};

const actions = {
  updateCategory: (context, categoryId) => {
    appService.getPosts(categoryId).then((data) => {
      context.commit('updateCategory', { categoryId, posts: data });
    });
  },
};

const getters = {
  posts: state => state.posts,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
