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
import { serverUrl } from "../utils/config";
//import { login } from "../services/users";

export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    loginHandle() {
       if (!this.userName || !this.password) {
        Toast("请输入账号和密码");
         return;
      }
      post(`${serverUrl}/api/v1/auth/login`, {
        userName: this.userName,
        password: this.password
      })
        .then(res => {
          if (res.data.code == "success") {
            this.$eventBus.$emit("navToZX", "UserCenter");
            Toast("登陆成功");
            this.$router.push({
              name: "UserCenter"
            });
            loginIn(res.data.token)
          }else {
            Toast("登录失败,请检查用户名和密码是否输入正确");
          }
        })
      // loginIn()
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


