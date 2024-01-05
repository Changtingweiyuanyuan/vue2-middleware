import { MUTATIONS } from "./mutations";
import { ACTIONS } from "./actions";
import { GETTERS } from "./getters";

export const STATE = {
  list: [],
};

export default {
  namespaced: true,
  state: STATE,
  actions: ACTIONS,
  mutations: MUTATIONS,
  getters: GETTERS,
};
