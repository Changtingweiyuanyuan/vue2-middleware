export const checkRentedBooksMiddleware = ({ next, store, pipe, router }) => {
  if (store.state.rentedBooks.list.length) {
    router.app.$toast.success("rentedBooks store已有租借書籍資料");
    return pipe();
  } else {
    router.app.$toast.warning("rentedBooks store為空，call books/getRentedBooks");
    store
      .dispatch("rentedBooks/getRentedBooks")
      .then(() => {
        return pipe();
      })
      .catch((err) => {
        console.error("getRentedBooksError =>", err);
        return next();
      });
  }
};
