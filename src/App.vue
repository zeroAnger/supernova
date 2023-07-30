<template>
  <el-config-provider namespace="ep">
    <div v-if="isLogin == '0'">
      <router-view></router-view>
    </div>

    <div v-else>
      <BaseHeader />
      <div class="base-view" style="display: flex">
        <BaseSide />
        <div class="base-router-view">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Home from "./components/Home.vue";

const name = ref("App");
var isLogin = ref("");
let _isLogin = sessionStorage.getItem("isLogin");
if (_isLogin == null || _isLogin == "0") {
  isLogin.value = "0";
} else {
  isLogin.value = "1";
}
</script>

<style>
@import "./styles/global.scss";
</style>
