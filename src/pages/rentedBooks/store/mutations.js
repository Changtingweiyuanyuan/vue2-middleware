export const TYPES = {
  MUT_UPDATE_RENTED_BOOKS: "mutUpdateRentedBooks",
};

export const MUTATIONS = {
  [TYPES.MUT_UPDATE_RENTED_BOOKS](state, payload) {
    state.list = payload;
  },
};
