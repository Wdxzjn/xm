<template>
  <div class="list">
    <van-nav-bar title="登录"></van-nav-bar>
    <van-cell-group>
      <van-field v-model="userName" left-icon="manager" placeholder="请输入用户名"/>
      <van-field
        v-model="password"
        left-icon="lock"
        type="password"
        right-icon="closed-eye"
        placeholder="请输入密码"
      />
    </van-cell-group>
    <router-link :to="{name: 'Reg'}" style="margin:1rem 0 0 1rem;" class="regin">没有账号?点此处注册</router-link>
    <van-button @click="loginHandle" class="btn-login" type="info" size="large">登录</van-button>
  </div>
</template>
<script>
// import { reg } from '../services/users'
import { loginIn } from "../utils/auth";
import { post } from "axios";
import { Toast } from "vant";

export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    loginHandle() {
      loginIn();
      if (!this.userName) {
        Toast("请输入账号!");

        return;
      } else if (!this.password) {
        Toast("请输入密码!");

        return;
      } else {
        Toast.success("登录成功!");
        this.$router.push({
          name: "UserCenter"
        });
      }
    }
  }
};
</script>
<style>
.btn-login {
  margin: 0.5rem 0;
  border-radius: 0.8rem;
  background: orange;
  border: 0;
}
.regin {
  color: green;
}
</style>


