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
    
    <router-link 
      :to= "{name : 'Detail' ,params: {id : i.id, name: i.name, price: i.price}}" 
      v-for='(i,index) in list' :key=index class="products">`<img :src='i.src' />
    <h3>{{i.name}}</h3>
    <p>{{i.price}}</p>` 
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src

import { images } from '../data'

export default {
  name: 'home',
  data() {
    return {
      value:'',
      images,
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
  components: {
  },
   methods: {
    onSearch() {
      this.$toast(this.value);
    },
    onCancel() {
      this.$toast(this.$t('cancel'));
    }
  }
}
</script>
<style scoped>
.swipe-img {
  width: 100%;
}
.products{
  width:50%;
  height: 150px;
  float: left;
  text-align: center;
}
.products h3,.products p{
  margin: 0;
}
.products img{
  margin: 0;
  width:100px;
  height:100px;
}
</style>

