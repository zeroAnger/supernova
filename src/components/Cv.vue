<template>
  <div>
    <h1>李东旭的简历</h1>
    <el-divider border-style="dotted" />
    <el-descriptions class="margin-top margin-left margin-right" title="简介" :column="3" :size="size" border>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <user />
            </el-icon>
            年龄
          </div>
        </template>
        29
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <location />
            </el-icon>
            工作经验
          </div>
        </template>
        8年
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <iphone />
            </el-icon>
            电话
          </div>
        </template>
        17610172962
      </el-descriptions-item>
      <!-- <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <tickets />
          </el-icon>
          Remarks
        </div>
      </template>
      <el-tag size="small">School</el-tag>
    </el-descriptions-item> -->
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <Message />
            </el-icon>
            e-mail
          </div>
        </template>
        lidxzero@163.com
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <office-building />
            </el-icon>
            居住地
          </div>
        </template>
        北京市昌平区 华龙苑中里
      </el-descriptions-item>
    </el-descriptions>
    <el-divider border-style="dotted" />
    <div class="cv_box">
      <el-text class="mx-1 cv-title" tag="b" size="large">专业技能</el-text>
      <el-space direction="vertical">
        <el-text class="">精通 PHP、GO 编程语言，具备良好的面向对象变成思想， 并熟练应用设计模式</el-text>
        <el-text class="">熟悉 Laravel、Yii 框架</el-text>
        <el-text class="">熟悉 MySQL，有 sql 优化,索引优化经验</el-text>
        <el-text class="">熟悉 Redis、memcache 缓存技术</el-text>
        <el-text class="">熟悉 Js 、jQuery、Vue</el-text>
        <el-text class="">熟悉 Git 项目管理工具</el-text>
        <el-text class="">熟悉 Linux 服务器</el-text>
      </el-space>
    </div>
    <el-divider border-style="dotted" />
    <div class="cv_box">
      <el-text class="mx-1 cv-title" tag="b" size="large">工作经历</el-text>
      <div class="margin-bottom">
        <el-space direction="vertical">
          <el-text class="mx-1" type="" tag="b">GO&PHP 工程师 | 文思海辉-百度 | 2021/4-2023/3</el-text>
          <el-tooltip class="box-item" effect="dark" content="Top Left prompts info" placement="top-start">
            <el-text class="mx-1" type="">负责AB实验平台功能开发</el-text>
          </el-tooltip>
          <el-text class="mx-1" type="">中台配置化框架设计与开发,解决多平台重复性功能开发问题(GO开发)</el-text>
          <el-text class="mx-1" type="">项目前端开发,独立完成项目Vue重构.参与新项目开发</el-text>
          <el-text class="mx-1" type="">参与主导PHP项目GO语言重构</el-text>
        </el-space>
      </div>
      <div class="margin-bottom">
        <el-space direction="vertical">
          <el-text class="mx-1" tag="b">PHP工程师 | 北京白鹭时代 | 2018/3-2021/2</el-text>
          <el-text class="mx-1" type="">参与游戏服务端设计,功能开发及后期维护</el-text>
          <el-text class="mx-1" type="">负责开发游戏平台开发</el-text>
          <el-text class="mx-1" type="">负责接入国内外SDK接入, 开发聚合SDK</el-text>
          <el-text class="mx-1" type="">负责游戏管理平台开发,用户数据收集分析,生成用户画像,付费习惯等数据</el-text>
        </el-space>
      </div>
      <div class="margin-bottom">
        <el-space direction="vertical">
          <el-text class="mx-1" tag="b">PHP工程师 |北京奇游互动科技有限公司 | 2017/2-2018/3</el-text>
          <el-text class="mx-1" type="">负责《全民坦克战争》手游服务端功能模块开发,主要负责战斗系统,聊天系统,日常活动等</el-text>
          <el-text class="mx-1" type="">负责GM后台功能开发与维护</el-text>
          <el-text class="mx-1" type="">负责接入国内外SDK接入, 开发聚合SDK</el-text>
          <el-text class="mx-1" type="">负责游戏管理平台开发,用户数据收集分析,生成用户画像,付费习惯等数据</el-text>
        </el-space>
      </div>
      <div class="margin-bottom">
        <el-space direction="vertical">
          <el-text class="mx-1" tag="b">PHP工程师 | 北京天景隆软件科技有限公司 | 2016/4-2017/2</el-text>
          <el-text class="mx-1" type=""> 国家开放大学后台管理系统，分为教务系统及考务系统两大部分。 管理 全国各地分部学院、学习中心管理学生信息、考试信息、专业信息等。 </el-text>
          <el-text class="mx-1">主要包含线上信息编辑，调动，查询等功能， 涵盖了文件上传、下载、图片 上传，数据整合，导出多种格式文件，</el-text>
          <el-text class="mx-1">如 Word、Excel、PDF 等功能。线上打印等功能。</el-text>
          <el-text class="mx-1">项目中负责需求分析，功能拆分，任务分配，功能模块的开发，代码优化，查询优化。 </el-text>
          <el-text class="mx-1">主要使用到 PHP，MySQL，敏捷开发。</el-text>
        </el-space>
      </div>
      <div class="margin-bottom">
        <el-space direction="vertical">
          <el-text class="mx-1" tag="b">PHP工程师 | 北京达维科技股份限公司 | 2015/6-2016/4</el-text>
          <el-text class="mx-1" type="">陆战之王》是一款战争题材的 SLG 手游，有着创新的疆域玩法，丰富的 成长系统，通过技能、装备、科技等系统提升玩家可玩性。</el-text>
          <el-text class="mx-1" type="">主要使用 Nginx，MySQL，Redis</el-text>
          <el-text class="mx-1" type="">在项目中负责开发服务端功能，GM系统开发。</el-text>
          <el-text class="mx-1" type="">开发《台网知识问答》小游戏，独立开发服务端功能,应用队列实现联机匹配功能,排行榜,服务端api</el-text>
        </el-space>
      </div>
    </div>
    <el-divider border-style="dotted" />
    <div class="cv_box">
      <el-text class="mx-1 cv-title" tag="b" size="large">教育背景</el-text>
      <el-space direction="vertical">
        <el-text class="mx-1">学校: 唐山职业技术学院</el-text>
        <el-text class="mx-1" type="">专业: 计算机网络</el-text>
      </el-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Iphone, Location, Message, OfficeBuilding, Tickets, User } from "@element-plus/icons-vue";

const size = ref("");
const iconStyle = computed(() => {
  const marginMap = {
    large: "8px",
    default: "6px",
    small: "4px"
  };
  return {
    marginRight: marginMap[size.value] || marginMap.default
  };
});
const blockMargin = computed(() => {
  const marginMap = {
    large: "32px",
    default: "28px",
    small: "24px"
  };
  return {
    marginTop: marginMap[size.value] || marginMap.default
  };
});
</script>

<style scoped>
@import "../styles/cv/cv.scss";
</style>
