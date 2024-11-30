import { createStore } from 'vuex';

const store = createStore({
  state: {
    userRole: null, // Default role value
  },
  getters: {
    getUserRole: (state) => state.userRole, // Getter for userRole
  },
  mutations: {
    setUserRole: (state, role) => {
      state.userRole = role; // Mutation to set the user role
    },
  },
  actions: {
    setUserRole: ({ commit }, role) => {
      commit('setUserRole', role); // Action to commit the mutation
    },
  },
});

export default store;
