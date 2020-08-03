<template>
  <div>
        <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">订单结算</div>
    </div>
    <van-cell is-link @click="payaddress" :border="false"> 
      <template #icon>
        <van-icon name="location-o" size="30"/>
      </template>
      <template #title>
          <div class="df">
              <div>收货人：{{address.name}}</div>
              <div v-if="address.isDefault===true"><van-tag type="danger">默认</van-tag></div>
          </div>
        <div>收货地址：{{address.address}}</div>
        
      </template>
      <template #default>
          <div>{{address.tel}}</div>
      </template>
    </van-cell>
    <div class="fss word " style="color:#F9CC9D">(收货不便时,可选择免费待收货服务)</div>
    <div class="wt mt">
        <img src="../../../项目资料/可能要用的图片/caitiao.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      address: {},
    };
  },
  methods: {
      icon() {
      this.$router.go(-1);
    },
    qwe() {
      this.$router.push("/");
    },
    getDefaultAddress() {
      this.$api
        .getDefaultAddress()
        .then((res) => {
          if (res.code === 200) {
            this.address = res.defaultAdd;
          }
          console.log(this.address, "xxx");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAddress() {
      this.$api
        .getAddress()
        .then((res) => {
          if (res.code === 200) {
            res.address.map((item) => {
              if (item._id === this.id) {
                this.address = item;
              }
            });
            this.id = "";
            this.$store.commit("address", this.id);
            console.log(this.address, "123");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    payaddress() {
      console.log(this.id);
      this.$router.push("/payaddress");
    },
  },
  mounted() {
    this.id = this.addressid;
    console.log(this.id, "abc");
    if (this.id === "") {
      this.getDefaultAddress();
    } else {
      console.log(this.id, "qqq");
      this.getAddress();
    }
  },
  watch: {},
  computed: {
    addressid() {
      return this.$store.state.address;
    },
  },
};
</script>

<style scoped lang='scss'>
.icon {
  position: absolute;
  top: 10px;
  left: 10px;
}
.word{
    margin: 0px 35px;
}
</style>