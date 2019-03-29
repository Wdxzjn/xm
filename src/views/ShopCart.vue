<template>
  <div class="list">
   
    <h1>我的购物车</h1>
    <h1>我的购物车</h1>
    <p>{{carid}}</p>
    <p>{{carname}}</p>
    <p>{{carsrc}}</p>
    <p>{{carprice}}</p>
    
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" class="carlist">
        <van-checkbox v-model="checked">全选</van-checkbox>
        <span slot="tip">
          你的收货地址不支持同城送,
          <span>修改地址</span>
        </span>
      </van-submit-bar>

  </div>
</template>
<script>
export default {
  data() {
    return {
      carid: "",
      carname: "",
      carsrc: "",
      carprice: "",
      price:'',
      checked:'',
    };
  },
  methods: {
    onSubmit(){

    }
  },
  created() {
    this.carid = this.$route.params.priid;
    this.carname = this.$route.params.priname;
    this.carsrc = this.$route.params.prisrc;
    this.carprice = this.$route.params.priprice;
  }
};
</script>
<style scoped>
  .carlist{margin-bottom: 3.1rem;}
</style>


