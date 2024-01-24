export const checkMembersMiddleware = ({ next, store, pipe, router }) => {
  if (store.state.members.list.length) {
    router.app.$toast.success("members store已有會員資料");
    return pipe();
  } else {
    router.app.$toast.error("members store為空，call members/getMembers");
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
