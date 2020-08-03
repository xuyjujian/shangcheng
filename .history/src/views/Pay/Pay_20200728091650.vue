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
      address:[]
    };
  },
  methods: {
    getDefaultAddress() {
      this.$api
        .getDefaultAddress()
        .then((res) => {
          if (res.code === 200) {
            this.address=res.defaultAdd
          }
          console.log(this.address, "xxx");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getDefaultAddress()
    
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>