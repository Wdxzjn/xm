<template>
  <div class="home">
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(img, index) in images" :key="index">
        <img class="swipe-img" :src="img">
      </van-swipe-item>
    </van-swipe>

    <router-link
      :to="{name : 'Detail' ,params: {id : i._id}}"
      v-for="(i,index) in list"
      :key="index"
      class="products"
    >
      `
      <img :src="'http://api.cat-shop.penkuoer.com'+i.coverImg">
      <h3>{{i.name}}</h3>
      <!-- <h4>{{i.descriptions}}</h4> -->
      <p>{{i.price}}</p>`
    </router-link>
  </div>
</template>

<script>
//   @ is an alias to /src
import { get } from "axios";
import { serverUrl } from "../utils/config.js";
export default {
  name: "home",
  data() {
    return {
      value: "",
      images: [
        "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
        "https://i1.mifile.cn/a4/xmad_1553592931609_qLJpe.jpg",
        "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg"
      ],
      list: {}
    };
  },
  created() {
    get(`${serverUrl}/api/v1/products`).then(res => {
      this.list = res.data.products;
    });
  },
  components: {},
  methods: {
    onSearch() {
      this.$toast(this.value)
    },
    onCancel() {
      this.$toast(this.$t("cancel"));
    }
  }
};
</script>
<style scoped>
.swipe-img {
  width: 100%;
}
.products {
  width: 50%;
  height: 150px;
  float: left;
  text-align: center;
}
.products h3,
.products h4,
.products p {
  margin: 0;
  font-size: 0.7rem;
}
.products img {
  margin: 0;
  width: 100px;
  height: 100px;
}
</style>

