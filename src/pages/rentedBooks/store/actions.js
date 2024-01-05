import { TYPES as MUTATIONS_TYPES } from "./mutations";
import { apiGetRentedBooks } from "@/api/rentedBooks";

export const TYPES = {
  GET_RENTED_BOOKS: "getRentedBooks",
};

export const ACTIONS = {
  [TYPES.GET_RENTED_BOOKS]({ commit }) {
    return apiGetRentedBooks()
      .then(({ data }) => {
        commit(MUTATIONS_TYPES.MUT_UPDATE_RENTED_BOOKS, data);
        return data;
      })
      .catch((err) => {
        commit(MUTATIONS_TYPES.MUT_UPDATE_RENTED_BOOKS, []);
        return err;
      });
  },
};
