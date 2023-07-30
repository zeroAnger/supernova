/*
 * @Author: 李东旭 lidxzero@163.com
 * @Date: 2023-07-18 09:06:13
 * @LastEditors: 李东旭 lidxzero@163.com
 * @LastEditTime: 2023-07-25 15:39:14
 * @FilePath: /supernova_vue/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import App from "./App.vue";
import "uno.css";
// 引入路由
import router from "./router/index";
// axios

// 富文本编辑器
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
// makedown
import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";

import Prism from "prismjs";
// 代码高亮
import "prismjs/components/prism-json";
// codemirror 编辑器的相关资源
import Codemirror from "codemirror";
// mode
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/vue/vue";
// edit
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/matchbrackets";
// placeholder
import "codemirror/addon/display/placeholder";
// active-line
import "codemirror/addon/selection/active-line";
// scrollbar
import "codemirror/addon/scroll/simplescrollbars";
import "codemirror/addon/scroll/simplescrollbars.css";
// style
import "codemirror/lib/codemirror.css";
VueMarkdownEditor.Codemirror = Codemirror;
// 选择使用主题
VueMarkdownEditor.use(vuepressTheme, {
  Prism
});

// import ElementPlus from 'element-plus';
// import "element-plus/dist/index.css";
import "element-plus/theme-chalk/src/message.scss";
// 使用 vite 按需引入 vite.config.ts
const app = createApp(App);
app.use(router);
app.component("QuillEditor", QuillEditor);
app.use(VueMarkdownEditor);
// app.use(axios);
app.mount("#app");

// 原版创建APP 注释掉
// createApp(App).mount('#app')
