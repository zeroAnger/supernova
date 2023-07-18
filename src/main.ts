import { createApp } from "vue";
import App from "./App.vue";
import "uno.css";
// 引入路由
import router from "./router/index";
// 富文本编辑器
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

// import ElementPlus from 'element-plus';
// import "element-plus/dist/index.css";
import "element-plus/theme-chalk/src/message.scss";
// 使用 vite 按需引入 vite.config.ts
const app = createApp(App);
app.use(router);
app.component("QuillEditor", QuillEditor);
app.mount("#app");

// 原版创建APP 注释掉
// createApp(App).mount('#app')
