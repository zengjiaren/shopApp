import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "is-selected", // 修改路由切换效果
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/category",
      name: "category",
      component: () =>
        import("./views/Category.vue")
    },
    {
      path: "/car",
      name: "car",
      component: () =>
        import("./views/Car.vue")
    },
    {
      path: "/my",
      name: "my",
      component: () =>
        import("./views/My.vue")
    },
    {
      path: "/xq",
      name: "xq",
      component: () =>
        import("./views/Xq.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import("./views/Login.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: () =>
        import("./views/Signup.vue")
    },
    {
      path: "/dingdan",
      name: "dingdan",
      component: () =>
        import("./views/Dingdan.vue")
    },
    {
      path: "/pinglun",
      name: "pinglun",
      component: () =>
        import("./views/Pinglun.vue")
    },
  ]
});
