export const checkBooksMiddleware = ({ next, store, pipe, router }) => {
  if (store.state.books.list.length) {
    router.app.$toast.info("books store已有全部書籍資料");
    return pipe();
  } else {
    router.app.$toast.error("books store為空，call books/getBooks");
    store
      .dispatch("books/getBooks")
      .then(() => {
        return pipe();
      })
      .catch((err) => {
        console.error("getBooksError =>", err);
        return next();
      });
  }
};
