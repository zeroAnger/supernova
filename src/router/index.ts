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
    component: () => import("../components/admin/Admin.vue")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
// 导出路由 用于main.ts 引入
export default router;
