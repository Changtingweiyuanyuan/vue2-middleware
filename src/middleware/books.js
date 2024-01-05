export const checkBooksMiddleware = ({ next, store, pipe }) => {
  console.log("checkBooksMiddleware 是否有會員資料", store.state.members.list);
  console.log("checkBooksMiddleware 是否有書籍資料", store.state.books.list);
  console.log("checkRentedBooksMiddleware 是否有已租借書籍資料", store.state.rentedBooks.list);
  if (store.state.books.list.length) {
    console.log("已經有書籍資料了，直接進行下個middleware");
    return pipe();
  } else {
    console.log("沒有書籍資料 -> call api");
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
