<template>
  <div class="list">
    <van-icon @click="backPage" name="arrow-left" />
    <img class="list-img" :src="src" alt="">
    <p class="price">{{price}}</p>
    <p class="txt">{{name}}</p>
    <van-goods-action>
      <van-goods-action-mini-btn
        icon="chat-o"
        text="客服"
      />
      <van-goods-action-mini-btn
        
        icon="cart-o"
        text="购物车"
        @click="toShopCart"
      />
      <van-goods-action-mini-btn
        icon="shop-o"
        text="店铺"
      />
      <van-goods-action-big-btn text="加入购物车" />
      <van-goods-action-big-btn 
        primary
        text="立即购买"
      />
    </van-goods-action>
  </div>
</template>
<script>
import { products } from '../data'
export default {
  data() {
    return{
      products,
      id: '',
      name: '',
      price: '',
      src: ''
    }
    
  },
  created() {
    
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    this.price = this.$route.params.price;
    this.src = this.$route.params.src;
  },
  methods: {
    backPage() {
      this.$router.push({
        name: 'Home'
      });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    },
    toShopCart() {
      this.$router.push({
        name: 'ShopCart'
      })
    }
  }
}
</script>

<style scoped>
  .list-img{
    width: 100%;
  }
  .price{
    color: #f00;
    font-size: 1rem;
    margin-left: 0.5rem;
  }
  .txt{
    margin-left: 0.5rem;
  }
  .van-goods-action{
    z-index: 10
  }
  .van-icon-arrow-left{
    display: block;
    width:2rem;
    height:2rem;
    font-size: 1.5rem;
    line-height:2rem;
    text-align: center;
    position: absolute;
    top:1rem;
    left:1rem;
    border-radius: 50%;
    background:rgba(167, 125, 125, 0.5) 
  }
</style>


