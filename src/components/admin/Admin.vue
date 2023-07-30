<!--
 * @Author: 李东旭 lidxzero@163.com
 * @Date: 2023-07-18 09:06:13
 * @LastEditors: 李东旭 lidxzero@163.com
 * @LastEditTime: 2023-07-30 09:19:57
 * @FilePath: /supernova_vue/src/components/admin/Admin.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="admin_box">
    <!-- <QuillEditor theme="snow"> </QuillEditor> -->
    <v-md-editor v-model="mdText" @save="saveBlog" height="100%"></v-md-editor>
  </div>
</template>
<script setup>
import { ref } from "vue";

import Editor from "../layouts/Editor.vue";
// import List from "../../common/api/api";

let data = async () => {
  let params = {
    title: 1,
    context: 2
  };
  let { name } = await List(params);
  console.log(name, "name");
};

const mdText = ref("1");
function saveBlog(event) {
  data();
}
</script>
<style scoped>
@import "../../styles/admin/admin.scss";
</style>
