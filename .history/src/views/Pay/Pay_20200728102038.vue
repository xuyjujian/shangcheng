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
      id: "0",
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
            this.id = "";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    payaddress(){
        this.$router.push('/payaddress')
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    console.log(this.id)
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