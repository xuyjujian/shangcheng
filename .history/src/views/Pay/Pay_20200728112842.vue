<template>
  <div>
    <van-cell value="内容" is-link @click="payaddress">
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
    </van-cell>
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
</style>