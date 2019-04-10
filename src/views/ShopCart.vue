<template>
  <div class="list">
    <van-nav-bar
      title="我的购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <h1>{{inf}}</h1>
    <div v-if="flag">
      <div class="box" v-for='(item,index) in products' :key='index'>
        <img :src="'https://api.cat-shop.penkuoer.com'+item.imgSrc"/>
        <div class="pro-detail">
          <p>{{item.name}}</p>
          <span>价格：{{item.price}}</span>&nbsp;&nbsp;&nbsp;
          <span>库存：{{item.quatity}}</span>
          <van-stepper class="num" v-model="item.num" />
        </div>
      </div>
    </div>
    <!-- <p>{{carid}}</p>
    <p>{{carname}}</p>
    <p>{{carsrc}}</p>
    <p>{{carprice}}</p> -->
    
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" class="carlist">
        <van-checkbox v-model="checked">全选</van-checkbox>
      </van-submit-bar>

  </div>
</template>
<script>
import { get } from 'axios';
import { serverUrl } from '../utils/config'
export default {
  data() {
    return {
      // carid: "",
      // carname: "",
      // carsrc: "",
      // carprice: "",
      // price:'',
      flag : false, //购物车没有商品时不显示数据
      checked:'',
      inf: '',
      list: [],
      products: []
    };
  },
  methods: {
    onSubmit(){

    },
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  created() {
    if(localStorage.getItem('my-shopcart')){ //localstorage中如果有数据，显示对应商品
      this.flag = true
      this.list.push(JSON.parse(localStorage.getItem('my-shopcart')))
      //console.log(this.list[0])
      this.list[0].forEach((item) => { //这里this.list后面要加上索引0，才会取到对应商品信息。不知道为啥
        //console.log(item)
        //console.log(item.product)
        get(`${serverUrl}/api/v1/products/${item.product}`).then(res => {  //通过商品id取对应商品
          //console.log(res.data)
          this.products.push({
            imgSrc: res.data.coverImg,
            name: res.data.name,
            price: res.data.price,
            quatity: res.data.quantity,
            num: item.quantity
          })
        });
      })
      //console.log(this.products)
    }else{
      this.inf = '购物车为空'
    }
  }
};
</script>
<style scoped>
  .carlist{margin-bottom: 3.1rem;}
  .box{
    margin: 1rem;
    overflow: hidden
  }
  .box img{
    width: 5rem;
    height: 5rem;
    float:left
  }
  .pro-detail{
    margin-left: 6rem
  }
  .pro-detail p{
    margin-top: 0.5rem
  }
  .pro-detail .num{
    float: right;
  }
</style>


