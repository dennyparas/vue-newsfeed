import appService from './../../app.service';

const state = {
  isAuthenticated: false,
};

const mutations = {
  logout: (state) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('token', null);
      window.localStorage.setItem('tokenExpiration', null);
    }
    state.isAuthenticated = false;
  },
  login: (state, token) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('token', token.token);
      window.localStorage.setItem('tokenExpiration', token.expiration);
    }
    state.isAuthenticated = true;
  },
  authenticate: (state) => {
    state.isAuthenticated = true;
  },
};

const actions = {
  logout: (context) => {
    context.commit('logout');
  },
  login: (context, credentials) => new Promise((resolve) => {
    appService.login(credentials)
      .then((data) => {
        context.commit('login', data);
        resolve();
      })
      .catch(() => {
        window.alert('Could not login');
      });
  }),
  checkIfLogin: (context) => {
    const expiration = window.localStorage.getItem('tokenExpiration');
    const unixTimestamp = new Date().getTime() / 1000;
    if (expiration !== null && parseInt(expiration, 10) - unixTimestamp > 0) {
      context.commit('authenticate');
    } else {
      context.commit('logout');
    }
  },
};

const getters = {
  isAuthenticated: state => state.isAuthenticated,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

