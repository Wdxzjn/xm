<template>
    <div class="main">
        <div class="top">
            <div class='top-inf'>
                <img src="../../public/tx.jpg" alt="">
                <div class="text">
                    <p class="user-name">{{username}}</p>
                    <p class="logout" @click="logOutHandle">退出登录</p>
                </div>
            </div>
        </div>
        <div class="bottom">
            <ul>
                <li>
                    <van-icon @click="pageChange" name="coupon-o"/>
                    <p>我的订单</p>
                </li>
                <li>
                    <van-icon @click="toAddress" name="location-o"/>
                    <p>收货地址管理</p>
                </li>
                <li>
                    <van-icon name="contact"/>
                    <p>个人信息</p>
                </li>
                <li>
                    <van-icon name="credit-pay"/>
                    <p>我的钱包</p>
                </li>
                <li>
                    <van-icon name="discount"/>
                    <p>我的优惠卷</p>
                </li>
                <li>
                    <van-icon name="vip-card-o"/>
                    <p>会员频道</p>
                </li>
            </ul>
        </div>
    </div>
</template>


<style scoped>
.top{
    width: 100%;
    height: 10rem;
    background: rgb(224, 80, 80)
}
.top img{
    width: 5rem;
    height: 5rem;
    float: left;
    border-radius: 50%;
    margin-left: 2.5rem;
    margin-top: 2.5rem
}
.top-inf .text{
    float: left;
    margin-top:2.4rem;
    margin-left: 1rem;
    color: #fff;
    font-size: 1.2rem
}
.top-inf .text p{
    margin:0.5rem
}
.bottom ul{
    width: 100%;
}
.bottom ul li{
    float: left;
    width: 33.3%;
    height: 7rem;
    text-align: center;
    color:#aaa
}
.bottom ul li i{
    font-size: 2.5rem;
    margin-top: 1rem
}
.bottom ul li p{
    margin: 0
}

</style>

<script>
import { logOut } from '../utils/auth'
export default {
    data() {
        return {
            username: ''
        }
    },
    created() {
        this.username = localStorage.getItem('username')
    },
    methods: {
        logOutHandle() {
        logOut()
        // 派发跳转事件 控制底部导航栏选中效果
        this.$eventBus.$emit('navToZX', 'Home')
        this.$router.push({
            name: 'Home'
        })
        },
        pageChange() {
        this.$eventBus.$emit('navToZX','ShopCart')
        this.$router.push({
            name: 'ShopCart'
        })
        },
        toAddress() {
        this.$router.push({
            name: 'Address'
        })
        }
    }
  
}
</script>