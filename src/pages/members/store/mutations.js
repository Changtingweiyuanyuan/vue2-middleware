export const TYPES = {
  MUT_UPDATE_MEMBERS: "mutUpdateMembers",
};

export const MUTATIONS = {
  [TYPES.MUT_UPDATE_MEMBERS](state, payload) {
    state.list = payload;
  },
};
