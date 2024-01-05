export const TYPES = {
  MUT_UPDATE_BOOKS: "mutUpdateBooks",
};

export const MUTATIONS = {
  [TYPES.MUT_UPDATE_BOOKS](state, payload) {
    state.list = payload;
  },
};
