<template>
<div>
  <van-nav-bar
    title="我的购物车"
  />
  <div class="cart-box" v-if="shopCart.length">
      <div class="card" v-for="(item,index) in list" :key="index">
          <dl>
            <dt>
              <input class="danx" type="checkbox"  v-model="checkeds" :value="item._id">
              <img :src='serverUrl+item.coverImg'/>
            </dt>
            <dd>
              <div class="text">
                <p>{{item.name}}</p>
                <!-- <p>{{item.descriptions}}</p> -->
                <p>￥{{item.price}}</p>
              </div>
              <div class="sl">
                <van-icon class="dela" @click="handleRemove(item.pid,index)" name="delete" />
                数量：
                <button class="num" @click="handleReduce(index,item._id)">-</button>
                  &nbsp;
                  <span>{{item.num}}</span>
                  &nbsp;
                <button class="num" @click="handleAdd(item._id)">+</button>
              </div>
            </dd>
          </dl>
      </div>
      <div class="cart-bottom">
         <input class="quanx" type="checkbox"   @click="checkAll()" v-model="checkall">
         <span>全选</span>
        <div>共<span id="con">{{ count }}</span>件商品</div>
        <div>总金额：<span>￥{{total}}元</span></div>
      </div>
  </div>
  <div v-else>购物车为空</div>
  </div>
</template>
<script>
import { getShopCart } from "../services/users";
import { getProductDetail } from "../services/products";
import { serverUrl } from '../utils/config'
import { addToShopCart } from "../services/users";
import { delFromProduct } from "../services/users"
export default {
   data() {
    return {
      list: [],
      serverUrl,
      checkall: false,
      checkeds: [],
      shopCart:[],
    };
  },
  created(){
   this.getShop();
  },
  methods: {
    getShop:function(){
       getShopCart().then(res=>{
       this.shopCart=res.data
       console.log(res.data)
       for(let i=0;i<this.shopCart.length;i++){
        this.list.push(this.shopCart[i].product)
        this.list[i].num=this.shopCart[i].quantity
        this.list[i].pid=this.shopCart[i]._id
       }
    });
    this.$eventBus.$emit('addToShopCartEnd');
    },
    handleReduce: function(index,id) {
      if (this.list[index].num == 1) {
        return;
      } else {
        addToShopCart(id, -1,this)
        this.$eventBus.$emit('addToShopCartEnd');//派发的事件都在app.vue里执行
        this.list=[]
        this.getShop();
      }
    },
    handleAdd: function(id) {
      addToShopCart(id, 1,this)
      this.$eventBus.$emit('addToShopCartEnd');
      this.list=[]
      this.getShop();
    },
    handleRemove: function(id,index) {
      delFromProduct(id)
      this.list=[]
      this.getShop();
    },
    checkAll:function() {
      var _this = this;
      if (this.checkall) {
        // 实现反选
        this.checkeds = [];
      } else {
        // 实现全选
        this.checkeds = [];
        this.list.forEach(function(item) {
          _this.checkeds.push(item._id);
        });
      }
      if (this.checkeds.length === this.list.length) {
        this.checkall = true;
      }else{
        this.checkall = false;
      }
    },
  },
  computed: {
    count: function() {
      var num = 0;
      for (var i in this.list) {
        num += parseInt(this.list[i].num);
      }
      return num;
    },

    total: function() {
      var total = 0;
      for (var i in this.list) {
        total += this.list[i].price * this.list[i].num;
      }
      return total;
    }
  },
  }
</script>
<style scoped>
.card{
  margin: 1rem;
  overflow: hidden;
  background: #efe
}
.card img{
  width: 5rem;
  height: 5rem;
}
.card dt{
  float: left
}
.card dd{
  float: left;
  margin-left: 1rem
}
.card dd .text{
  float: left;
  
}
.card dd .sl{
  float: left
}
.card dd .sl .num{
  border: 0;
  border-radius: 50%;
}
.card dd .sl .dela{
  display: block;
  margin-bottom: 1.5rem;
  margin-left: 7rem;
  font-size: 1.5rem
}
.card dd p{
  width: 5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 0.5rem;
  margin-bottom: 1.2rem
}
.danx{
  width: 2rem;
  border: 0;
  border-radius: 50%;
  position: relative;
  top: -2rem;
}
.cart-bottom{
  position: fixed;
  bottom: 3rem;
  background: #efe;
  width: 88%;
  margin: 1rem;
  padding: 0.5rem
}
</style>



