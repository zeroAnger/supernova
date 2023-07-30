/*
 * @Author: 李东旭 lidxzero@163.com
 * @Date: 2023-07-20 15:45:33
 * @LastEditors: 李东旭 lidxzero@163.com
 * @LastEditTime: 2023-07-25 10:56:14
 * @FilePath: /supernova_vue/src/common/api/api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "../utils/request";
import qss from "Qs";

// 列表
export function List(data: any) {
  return request({
    url: "/api/blog/save",
    params: {
      title: 1,
      context: 2
    },
    method: "post",
    data: data
  });
}
/**
 * @description: 登录接口
 * @param {any} data
 * @return {*}
 */
export function Login(data: any) {
  return request({
    url: "/api/auth/login",
    method: "post",
    data: data
  });
}
/**
 * @description: 注册接口
 * @param {any} data
 * @return {*}
 */
export function Register(data: any) {
  return request({
    url: "/api/auth/register",
    method: "post",
    data: data
  });
}
