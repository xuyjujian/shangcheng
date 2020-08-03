<template>
  <div></div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      address: [],
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
            this.id=this.$route.query.id
            res.address.map(item=>{
                if(item._id===this.id){
                     this.address=item
                }
            })
          }
          console.log(this.address);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getDefaultAddress();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>