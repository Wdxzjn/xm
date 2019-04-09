<template>
    <div>
        <van-nav-bar
        title="地址列表"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            :disabled-list="disabledList"
            disabled-text="以下地址超出配送范围"
            @add="onAdd"
            @edit="onEdit"
            @select='onSelect'
        />
    </div>
</template>

<script>
    export default {
    data() {
        return {
        chosenAddressId: '1',
        addr: {
            id: '',
            name: '',
            tel: '',
            address: ''
        },
        list: [
            {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
            },
            {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号'
            }
        ],
        disabledList: [
            {
            id: '3',
            name: '王五',
            tel: '1320000000',
            address: '浙江省杭州市滨江区江南大道 15 号'
            }
        ]
        }
    },
    created() {
        var address=[];
        if(localStorage.getItem('address')){
            address = JSON.parse(localStorage.getItem('address'));
            this.list.push(address);
            console.log(this.list)
        }
        //this.list.pop(2);
        console.log(this.list);
        // this.$eventBus.$on('addToList',(res) => {
        //     console.log(res);
        //     this.addr.id= 1;
        //     this.addr.name = res.name;
        //     this.addr.tel = res.tel;
        //     this.addr.address = res.address;
        //     this.list.push(this.addr);
        //     //console.log(this.list)
        // })
        // this.addr.id = this.$route.params.id;
        // this.addr.name = this.$route.params.name;
        // this.addr.tel = this.$route.params.tel;
        // this.addr.address = this.$route.params.address;
        // this.list.push(this.addr);
        // console.log(this.$route.params.name);
        //console.log(this.$route)
    },
    methods: {
        onAdd() {
            this.$router.push({
                name: 'newAddress'
            })
        },
        onSelect(item, index) {
            //this.chosenAddressId = item.id
        },
        onEdit(item, index) {
             console.log(item)
        },
        onClickLeft() {
            this.$router.push({
                name: 'UserCenter'
            });
        },
    }
    }
</script>

