<template>
  <div class="list">
    <van-card
      v-for="product in products"
      :num="product.quantity"
      :price="product.price"
      :desc="product.descriptions"
      :title="product.name"
      :thumb="'http://api.cat-shop.penkuoer.com'+product.coverImg"
      :key="product._id"
      :thumb-link="`#/list/${product._id}`"
      :to="{params:{id:product._id}}"
    >
      <div slot="footer">
        <van-button size="mini" @click="addToCartHandle(product._id)">
          <van-icon class="btn-cart" name="cart"/>
        </van-button>
      </div>
    </van-card>
    <van-button size="large" @click="loadMore">加载更多</van-button>
  </div>
</template>
<script>
import { get } from "axios";
import { addToShopCart } from '../services/users'
import { serverUrl } from "../utils/config.js";
export default {
  data() {
    return {
      products: [],
      page: 1,
      pageCount: 1
    };
  },
  methods: {
    addToCartHandle(id) {
      //alert(id);
      alert('添加成功')
      addToShopCart(id, 1)
      this.$eventBus.$emit('addToShopCartEnd');
    },
    loadMore() {
      this.page += 1;
      this.loadData();
    },
    loadData() {//   为列表页调取接口
      get(`${serverUrl}/api/v1/products?page=${this.page}`).then(res => {
        this.products = this.products.concat(res.data.products);
        this.pageCount = res.data.pages;
      });
    }
  },
  created() {
    this.loadData();
  }
};
</script>
<style>
.list {
  padding-bottom: 60px;
}
.btn-cart {
  color: deeppink;
  font-size: 1.2rem;
}
</style>


