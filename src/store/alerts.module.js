import UniqueId from '@/helpers/uniqueId';

export default {
  namespaced: true,
  state: {
    messages: [],
  },
  getters: {
    all: (state) => state.messages,
  },
  mutations: {
    add(state, { message, id }) {
      state.messages.push({ id, message });
    },
    remove(state, { id }) {
      state.messages = state.messages.filter((msg) => msg.id !== id);
    },
  },
  actions: {
    add({ commit }, message) {
      const id = UniqueId('alert');
      commit('add', { message, id });

      setTimeout(() => {
        commit('remove', { id });
      }, 3000);
    },
  },
};
