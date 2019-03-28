<template>
  <div class="list">
    <van-nav-bar title="注册"   right-text="登录" left-arrow @click-right="onClickRight"/>
    <van-cell-group>
      <van-field v-model="userName" left-icon="manager" placeholder="请输入用户名"/>
      <van-field v-model="password" left-icon="lock" type="password" placeholder="请输入密码"/>
      <van-field v-model="repassword" left-icon="lock" type="password" placeholder="请确认密码"/>
    </van-cell-group>
    <van-button @click="regHandle" class="btn-login" type="info" size="large">注册</van-button>
  </div>
</template>
<script>
import { reg } from "../services/users";
import { loginIn } from "../utils/auth";
import { Toast } from "vant";

export default {
  data() {
    return {
      userName: "",
      password: "",
      repassword: ""
    };
  },
  methods: {
    onClickRight() {
      this.$router.push({
        name:"Login"
      });
    },

    async regHandle() {
      if (!this.userName || !this.password) {
        Toast("请输入账号和密码!");
        return;
      }
      if (this.password != this.repassword) {
        Toast("两次输入的密码不一致!");
        return;
      }
      const result = await reg({
        userName: this.userName,
        password: this.password
      });
      if (result.data.code == "success") {
        loginIn(result.data.token); // 写token到本地
        // 页面跳转
        Toast.success("注册成功");
        this.$router.push({
          name: "Login"
        });
      } else {
        Toast("用户名已存在!");
      }
    }
  }
};
</script>

