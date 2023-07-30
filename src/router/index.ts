import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// 配置路由
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home.vue")
  },
  {
    path: "/cv",
    name: "Cv",
    component: () => import("../components/Cv.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../components/admin/Admin.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/login/Login.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
// 登录拦截
router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.meta.requireAuth) {
    // 需要
    var num = sessionStorage.getItem("isLogin");
    if (num == "1") {
      next();
    } else {
      next({
        path: "/login" // 返回登录界面
      });
    }
  } else {
    // 如果不许哟啊登录权限就直接跳转该路由
    next();
  }
});
// 导出路由 用于main.ts 引入
export default router;
