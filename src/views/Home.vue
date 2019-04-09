<template>
  <div class="home">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(img, index) in images" :key="index">
        <img class="swipe-img" :src="img"/>
      </van-swipe-item>
    </van-swipe>
    <van-notice-bar mode="closeable">
      足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
    </van-notice-bar>
    <div class="box">
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
    <van-pagination 
      class='navPage'
      v-model="currentPage" 
      :total-items="31" 
      :show-page-size="3" 
      @change="changePage"
      force-ellipses
    />
  </div>
</template>

<script>
//     @ is an alias to /src
import { get } from "axios";
import { serverUrl } from "../utils/config.js";
export default {
  name: 'home',
  data() {
    return {
      value: "",
      currentPage: 1,
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
      console.log(res.data.products);
      this.list = res.data.products;
    });
  },
  components: {},
  methods: {
    onSearch() {
      this.$toast(this.value)
    },
    onCancel() {
      this.$toast(this.$t('cancel'));
    },
    changePage(e) {
      var evt = e || event;
      //console.log(evt)
      this.currentPage = evt;
      //console.log(this.currentPage)
      get(`${serverUrl}/api/v1/products?page=${this.currentPage}`).then(res => {
        //console.log(res.data.products);
        this.list = res.data.products;
      })
    }
  }
}
</script>
<style scoped>
.swipe-img {
  width: 100%;
}
.products{
  width:46.5%;
  height: 150px;
  padding-top: 5px;
  float: left;
  text-align: center;
  margin:0.25rem;
  border:1px solid #ccc;
  border-radius:0.7rem;
}
.products h3,
.products h4,
.products p {
  margin: 0;
  font-size: 0.7rem;
}
.products img{
  margin: 0;
  width:100px;
  height:100px;
}
.box{
  overflow: hidden;
}
.navPage{
  padding-bottom:2rem;
  margin-bottom: 1.5rem;
}
</style>

