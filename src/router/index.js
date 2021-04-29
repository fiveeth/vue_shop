import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Home from "@/components/Home";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/home",
      component: Home
    }
  ]
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to: 将要访问的路由
  // from: 从哪个路由跳转而来
  // next: next() 放行  next('/login')这种带参数的表示强制跳转
  if (to.path === "/login") {
    return next();
  }

  // 获取token
  const token = window.sessionStorage.getItem("token");
  if (token) {
    return next();
  } else {
    return next("/login");
  }
});

export default router;
