<template>
  <div class="list">
    <van-uploader :after-read="onRead">
      <van-icon name="photograph" />
    </van-uploader>
    <van-cell-group>
      <van-field v-model="userName" placeholder="请输入用户名" />
      <van-field v-model="password" type="password" placeholder="请输入密码" />
    </van-cell-group>
    <van-button @click="loginHandle" class="btn-login" type="info" size="large">注册</van-button>
    <router-link :to="{name:'Login'}">已有账号，去登录吧</router-link>
  </div>
</template>
<script>
import { loginIn } from '../utils/auth'
import { post } from 'axios'

export default {
  data() {
    return {
      userName: '',
      password: '',
    }
  },
  methods: {
    loginHandle() {
      post('http://localhost:3000/api/v1/auth/login', {
        userName: this.userName,
        password: this.password
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      // loginIn()
      // this.$eventBus.$emit('navToZX', 'UserCenter')
      // // this.$router表示路由对象,可以在其上执行路由跳转方法
      // //  编程方式实现跳转,通过.push一个路由对象实现
      // // 当登录成功之后跳回个人中心
      // this.$router.push({
      //   name: 'UserCenter'
      // })
    },
    onRead(file) {
      console.log(file)
    }
  }
}
</script>
<style scoped>
.btn-login {
  margin: 0.5rem 0;
}
.van-icon-photograph{
  font-size: 100px;
  color: #cecece;
}
.van-cell-group{
  display: inline-block;
  position: absolute;
}
</style>


