<template>
    <div>
        <van-nav-bar
        title="添加地址"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>

export default {
    data() {
    return {
      areaList: {
      province_list: {
          110000: '北京市',
          120000: '天津市'
      },
      city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县'
      },
      county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区',
          // ....
      }
    },
      searchResult: []
    }
  },

  methods: {
    onSave(content) {
      console.log(content);
      //this.$eventBus.$emit('addToList',{name: content.name, tel: content.tel, address: content.city+content.addressDetail})
      // this.addr.name = content.name;
      // this.addr.tel = content.tel;
      // this.addr.address = content.address
      localStorage.setItem('address',JSON.stringify({name: content.name, tel: content.tel, address: content.city+content.addressDetail}))
    },
    onDelete() {
      //Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    },
    onClickLeft() {
      this.$router.push({
          name: 'Address'
      });
    }
  }
}
</script>

