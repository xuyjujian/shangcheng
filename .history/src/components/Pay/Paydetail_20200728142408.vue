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
    return {
      list:{}
    };
  },
  methods: {},
  mounted() {
    console.log(this.idDirect, "111");
    this.$api
      .getGoods(this.goodsid)
      .then((res) => {
        if(res.code===200){
          this.list=res.goods
        }
        console.log(this.list)
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