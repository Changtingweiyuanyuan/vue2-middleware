import { TYPES as MUTATIONS_TYPES } from "./mutations";
import { apiGetBooks } from "@/api/books";

export const TYPES = {
  GET_BOOKS: "getBooks",
};

export const ACTIONS = {
  [TYPES.GET_BOOKS]({ commit }) {
    return apiGetBooks()
      .then(({ data }) => {
        commit(MUTATIONS_TYPES.MUT_UPDATE_BOOKS, data);
        return data;
      })
      .catch((err) => {
        commit(MUTATIONS_TYPES.MUT_UPDATE_BOOKS, []);
        return err;
      });
  },
};
