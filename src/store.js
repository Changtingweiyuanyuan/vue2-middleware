import Vue from "vue";
import Vuex from "vuex";
import members from "@/pages/members/store/index";
import books from "@/pages/books/store/index";
import rentedBooks from "@/pages/rentedBooks/store/index";

Vue.use(Vuex);

const pages = require.context("./pages", true, /\.js$/);
const storeModules = {};
export const createStoreModule = function(stores) {
  stores.keys().forEach(filename => {
    const moduleName = filename
      .replace(/(\.\/|\.js)/g, "")
      .replace(/^\w/, c => c);

    storeModules[moduleName] = stores(filename).default || stores(filename);
  });
};
createStoreModule(pages);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    members,
    books,
    rentedBooks
  },
});