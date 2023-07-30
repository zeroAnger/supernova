<template>
  <div class="login-form">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="user">
        <el-input v-model="ruleForm.user" autocomplete="off" />
      </el-form-item>
      <el-form-item v-if="setin" label="手机号" prop="mobile">
        <el-input v-model="ruleForm.mobile" type="mobile" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item v-if="setin == true" label="密码校验" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item v-if="setin == true" label="验证码" prop="code">
        <el-input v-model.number="ruleForm.code" />
      </el-form-item>
      <el-form-item>
        <el-button v-if="setin == false" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        <el-button v-if="setin == true" type="primary" @click="submitForm(ruleFormRef)">注册</el-button>
        <!-- <el-button @click="resetForm(ruleFormRef)">注册</el-button> -->
        <el-button v-if="setin == false" @click="setin = reset(setin)">注册</el-button>
        <el-button v-if="setin == true" @click="setin = reset(setin)">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { Login, Register } from "../../common/api/api";
import { unescapeQuote } from "@kangc/v-md-editor";
import { routerKey, useRouter } from "vue-router";

const ruleFormRef = ref<FormInstance>();
// 是否为注册
const setin = ref(false);
const router = useRouter();

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (!setin) {
    callback();
  }
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};
const validateUser = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the username again"));
  } else if (value !== ruleForm.user) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  code: "",
  mobile: "",
  isLogin: true,
  user: "",
  pass: "",
  checkPass: ""
});

const rules = reactive<FormRules<typeof ruleForm>>({
  user: [{ validator: validateUser, trigger: "blur" }],
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }]
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  var params = new FormData();
  formEl.validate((valid) => {
    params.append("name", ruleForm.user);
    params.append("password", ruleForm.pass);
    if (valid) {
      if (setin.value == true) {
        // 注册
        params.append("mobile", ruleForm.mobile);
        params.append("code", ruleForm.code);

        var rese = Register(params);
      } else {
        // 登录
        Login(params).then(
          (res) => {
            if (res.ErrorCode == 0) {
              sessionStorage.setItem("isLogin", "1");
              localStorage.setItem("token", res.data.access_token);
              window.location.href = "/admin";
            }
          },
          (err) => {
            console.log(err);
          }
        );
      }
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

// 注册

// 返回
const reset = (type: boolean) => {
  return type ? false : true;
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<style scoped>
@import "../../styles/login/login.scss";
</style>
