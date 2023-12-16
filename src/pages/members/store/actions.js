import { TYPES as MUTATIONS_TYPES } from "./mutations";
import { apiGetMembers } from "@/api/members";

export const TYPES = {
  GET_MEMBERS: "getMembers",
};

export const ACTIONS = {
  [TYPES.GET_MEMBERS]({ commit }) {
    return apiGetMembers()
      .then(({ data }) => {
        commit(MUTATIONS_TYPES.MUT_UPDATE_MEMBERS, data);
        return data;
      })
      .catch((err) => {
        commit(MUTATIONS_TYPES.MUT_UPDATE_MEMBERS, []);
        return err;
      });
  },
};
