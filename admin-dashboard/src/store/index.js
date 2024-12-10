import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';


Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'my-app-new',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    aktivKunden: '',
    token: {},
    authenticated: false,
    drawer: true // From toggle-sidebar
  },
  mutations: {
    token (state, token) {
      state.token = token;
    },
    authenticated (state, authenticated) {
      state.authenticated = authenticated;
    },
    benutzer (state, benutzer) {
      state.benutzer = benutzer;
    },
    auth (state, status) {
      state.authenticated=status;
    },
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {
    TOGGLE_DRAWER({ commit }) {
      commit('toggleDrawer');
    }
  },
  getters: {
    DRAWER_STATE(state) {
      return state.drawer;
    }
  },
  modules:{
  },
  plugins: [vuexPersist.plugin]
});
