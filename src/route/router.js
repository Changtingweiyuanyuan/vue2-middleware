import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import Toast from 'vue-toastification'
import pipelineMiddleware from "@/middleware/pipeline";
import { checkMembersMiddleware } from "@/middleware/members";
import { checkBooksMiddleware } from "@/middleware/books";
import { checkRentedBooksMiddleware } from "@/middleware/rentedBooks";
import Members from "@/pages/members/Index.vue";
import Books from "@/pages/books/Index.vue";
import RentedBooks from "@/pages/rentedBooks/Index.vue";

Vue.use(Router);

// middleware中使用toast
Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 3,
  newestOnTop: true,
  position: "bottom-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.7,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
  icon: {
    iconClass: "vm-toast-icon",
    iconChildren: "",
    iconTag: "i"
  },
  rtl: false
});

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "members",
      component: Members,
      meta: {
        middleware: [checkMembersMiddleware, checkRentedBooksMiddleware, checkBooksMiddleware],
        title: "會員資訊",
      },
    },
    {
      path: "/books",
      name: "books",
      component: Books,
      meta: {
        middleware: [checkBooksMiddleware, checkRentedBooksMiddleware],
        title: "所有書籍資訊",
      },
    },
    {
      path: "/rentedBooks",
      name: "rentedBooks",
      component: RentedBooks,
      meta: {
        middleware: [checkMembersMiddleware, checkRentedBooksMiddleware],
        title: "已租借書籍資訊",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  if (to.meta.title) {
    window.document.title = to.meta.title;
  }

  const middleware = to.matched.reduce((acc, route) => {
    if (route.meta.middleware) {
      acc = [...acc, ...route.meta.middleware];
    }
    return acc;
  }, []);
  if (!middleware.length) return next();

  console.log("此路由會經過的所有middleware", middleware);

  // 使用者若尚未登入，存即將進入的路由進cookies
  // if (to.fullPath !== "/login") {
  //   window.$cookies.set("redirectUrl", to.fullPath);
  // }

  const context = {
    to,
    from,
    next,
    store,
    router
  };

  return middleware[0]({
    ...context,
    pipe: pipelineMiddleware(context, middleware, 1),
  });
});

export default router;
