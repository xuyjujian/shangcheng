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
              this.id = this.$route.query.id;
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
        this.id='1'
      this.$router.push("/payaddress");
    },
  },
  mounted() {
    console.log(this.id);
    if (this.id === "") {
      this.getDefaultAddress();
    } else {
      this.getAddress();
    }
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>