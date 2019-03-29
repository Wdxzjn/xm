<template>
  <div class="list" >
    <van-nav-bar
      title="个人中心"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell @click="pageChange" value="我的订单" icon="coupon-o" is-link>
      <template slot="我的订单">
        <span class="custom-text">单元格</span>
        <van-tag type="danger">标签</van-tag>
      </template>
    </van-cell>
    <van-cell @click="toAddress" title="收货地址管理" icon="location-o" is-link />
    <van-cell value="修改密码" icon="user-o" is-link>
      <template slot="我的订单">
        <span class="custom-text">单元格</span>
        <van-tag type="danger">标签</van-tag>
      </template>
    </van-cell>
    <van-cell value="修改个人信息" icon="friends-o" is-link>
      <template slot="我的订单">
        <span class="custom-text">单元格</span>
        <van-tag type="danger">标签</van-tag>
      </template>
    </van-cell>
    <van-cell value="我的优惠卷" icon="discount" is-link>
      <template slot="我的订单">
        <span class="custom-text">单元格</span>
        <van-tag type="danger">标签</van-tag>
      </template>
    </van-cell>
    <van-cell value="我的钱包" icon="paid" is-link>
      <template slot="我的订单">
        <span class="custom-text">单元格</span>
        <van-tag type="danger">标签</van-tag>
      </template>
    </van-cell>
    <br>
    <button @click="logOutHandle">退出登录</button>
  </div>
</template>
<script>
import { logOut } from '../utils/auth'
export default {
  methods: {
    logOutHandle() {
      logOut()
      // 派发跳转事件 控制底部导航栏选中效果
      this.$eventBus.$emit('navToZX', 'Home')
      this.$router.push({
        name: 'Home'
      })
    },
    onClickLeft() {
      this.$router.back();
    },
    pageChange() {
      this.$eventBus.$emit('navToZX','ShopCart')
      this.$router.push({
        name: 'ShopCart'
      })
    },
    toAddress() {
      this.$router.push({
        name: 'Address'
      })
    }
  }
  
}
</script>

<style scoped>
button{
  width: 100%;
  height:3rem;
  line-height: 3rem;
  font-size:1.5rem;
  color: rgb(53, 31, 31);
}
</style>
