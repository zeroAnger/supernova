/*
 * @Author: 李东旭 lidxzero@163.com
 * @Date: 2023-07-20 14:57:39
 * @LastEditors: 李东旭 lidxzero@163.com
 * @LastEditTime: 2023-07-25 15:52:28
 * @FilePath: /supernova_vue/src/common/utils/request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";
import type { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";
import { Names } from "./requestCom/env-name"; // 枚举
import { errorCodeType } from "./requestCom/error-code"; // 请求错误代码
import { ElMessage } from "element-plus";

const service = axios.create({
  // 配置的跨域标识
  baseURL: "api4",
  // 请求头
  headers: {
    "Content-Type": "application/json"
  },
  // data: qss.stringify(data),
  // 超时
  timeout: 1000 * Names.TIME
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    console.log(error, "e");
  }
);
// 响应拦截器
service.interceptors.response.use(
  (config: AxiosResponse) => {
    const code = config.data["code"] || 200;
    const serverCode = config.data.ErrorCode;
    if (code == 200 && serverCode == 0) {
      return Promise.resolve(config.data);
    } else {
      let gCode = code;
      if (code == 200 && serverCode != undefined) {
        gCode = serverCode;
      }
      // 未登录 跳转登录页
      const msg = errorCodeType(gCode);
      ElMessage.error(msg);
      return Promise.reject(config.data);
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default service;
