<template>
  <div class="list">
    <van-icon @click="backPage" name="arrow-left"/>
    <img class="list-img" :src="'http://api.cat-shop.penkuoer.com'+list.coverImg" alt>
    <p class="price">￥{{list.price}}元</p>
    <p>{{list.name}}</p>
    <p class="txt">{{list.descriptions}}</p>
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" text="客服"/>
      <van-goods-action-mini-btn info="5" icon="cart-o" text="购物车"/>
      <van-goods-action-mini-btn icon="shop-o" text="店铺"/>
      <van-goods-action-big-btn @click='addToCart(list.id)' :to="{name:'ShopCart'}" text="加入购物车"/>
      <van-goods-action-big-btn primary text="立即购买"/>
    </van-goods-action>
  </div>
</template>
<script>
import { get } from "axios";
import { serverUrl } from "../utils/config.js";
//import { products } from "../data/"
export default {
  data() {
    return {
      id: "",
      list: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    get(`${serverUrl}/api/v1/products/${this.id}`).then(res => {
      //  console.log(res)
      this.list = res.data;
      console.log(this.list)
    });
  },
  methods: {
    backPage() {
      this.$router.go(-1);
    },
    addToCart(params) {
      localStorage.setItem('my-shopcart',params)
    }
  }
};
</script>

<style scoped>
.list-img {
  width: 100%;
}
.price {
  color: #f00;
  font-size: 1rem;
  margin-left: 0.5rem;
}
.txt {
  margin-left: 0.5rem;
}
.van-goods-action {
  z-index: 10;
}
.van-icon-arrow-left {
  display: block;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  position: absolute;
  top: 1rem;
  left: 1rem;
  border-radius: 50%;
  background: rgba(167, 125, 125, 0.5);
}
</style>


