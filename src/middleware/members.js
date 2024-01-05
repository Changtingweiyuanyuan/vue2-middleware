export const checkMembersMiddleware = ({ next, store, pipe }) => {
  console.log("checkMembersMiddleware 是否有會員資料", store.state.members.list);
  if (store.state.members.list.length) {
    console.log("已經有會員資料了，直接進行下個middleware");
    return pipe();
  } else {
    console.log("沒有會員資料 -> call api");
    store
      .dispatch("members/getMembers")
      .then(() => {
        return pipe();
      })
      .catch((err) => {
        console.error("getMembersError =>", err);
        return next();
      });
  }
};
