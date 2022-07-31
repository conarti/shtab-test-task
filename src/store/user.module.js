import User from '@/services/User';

export default {
  namespaced: true,
  state: {
    fullName: null,
    avatar: null,
    email: null,
  },
  getters: {
    isNotLoaded: (state) => state.email === null,
    hasAvatar: (state) => state.avatar !== null,
    fullName: (state) => state.fullName,
    avatar: (state) => state.avatar,
    email: (state) => state.email,
  },
  mutations: {
    setProfileInfo(state, {
      avatar,
      fullName,
      email,
    }) {
      state.avatar = avatar;
      state.fullName = fullName;
      state.email = email;
    },
  },
  actions: {
    async fetch({ commit }) {
      const data = await User.fetchProfile();
      commit('setProfileInfo', data);
    },
  },
};
