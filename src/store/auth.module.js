import storageKeys from '@/globals/storageKeys';
import User from '@/services/User';
import LocalStorage from '@/services/LocalStorage';

export default {
  namespaced: true,
  state: {
    token: LocalStorage.get(storageKeys.userToken) ?? null,
  },
  getters: {
    token: (state) => state.token,
    hasAuth: (state) => state.token !== null,
  },
  mutations: {
    login(state, token) {
      state.token = token;
      LocalStorage.set(storageKeys.userToken, token);
    },
    logout(state) {
      state.token = null;
      LocalStorage.remove(storageKeys.userToken);
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      const token = await User.login({ username, password });
      commit('login', token);
    },
  },
};
