<template>
  <div>123</div>
</template>

<script>
export default {
  name: "",
  props: {
    idDirect: {
      type: Boolean,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.idDirect, "111");
    this.$api
      .getGoods(this.goodsid)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
    goodsid() {
      return this.$store.state.goodid;
    },
  },
};
</script>

<style scoped lang='scss'>
</style>