<template>
  <div>
    <van-cell value="内容" is-link icon="location-o" @click="payaddress">
      <template #title>
        <div>123</div>
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
      this.id=this.addressid
    console.log(this.id,"123");
    if (this.id === false) {
      this.getDefaultAddress();
    } else {
      this.getAddress();
      this.id=''
      this.$store.commit('address',this.id)
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