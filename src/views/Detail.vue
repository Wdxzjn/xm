<template>
  <div class="list">
    <van-icon @click="backPage" name="arrow-left" />
    <img class="list-img" src="./feel.jpg" alt="">
    <p class="price">￥2999</p>
    <p class="txt">小米9 战斗天使 骁龙855旗舰处理器 4800万超高像素</p>
    <van-goods-action>
      <van-goods-action-mini-btn
        icon="chat-o"
        text="客服"
      />
      <van-goods-action-mini-btn
        
        icon="cart-o"
        text="购物车"
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
export default {
  data() {
    return{
      id: '',
      name: '',
      price: '',
      list:[{
        id: 1,
        name: '小米9',
        price: 2999,
        src: require('./phone.jpg')
      },{
        id: 2,
        name: '小米8',
        price: 2888,
        src: require('./phone.jpg')
      },{
        id: 3,
        name: '小米6',
        price: 2699,
        src: require('./phone.jpg')
      }]
    }
    
  },
  created() {
    
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    this.price = this.$route.params.price;
  },
  methods: {
    backPage() {
      this.$router.push({
        name:"List",
      });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
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


