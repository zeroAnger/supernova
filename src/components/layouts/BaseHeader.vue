<script lang="ts" setup>
import { toggleDark } from "~/composables";
</script>

<template>
  <el-menu 
    :default-active="$route.path"
    :router="true"
  class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">Home</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Blog</template>
      <el-menu-item index="2-1">PHP</el-menu-item>
      <el-menu-item index="2-2">GO</el-menu-item>
      <el-menu-item index="2-3">Mysql</el-menu-item>
      <el-menu-item index="2-5">Redis</el-menu-item>
      <el-menu-item index="2-6">Elasticsearch</el-menu-item>
      <el-menu-item index="2-7">Linux</el-menu-item>
      <!-- <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu> -->
    </el-sub-menu>
    <el-menu-item index="/cv" >CV</el-menu-item>
    <el-menu-item index="4" route=cv>Orders</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>
