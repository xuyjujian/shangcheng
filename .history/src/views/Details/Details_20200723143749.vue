<template>
  <div>
      <div v-html="this.goods.goodsOne.detail"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      goods:{}
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getGoods(this.id)
      .then(res => {
          if(res.code===200){
              this.goods=res.goods
          }
          console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
    id() {
      return this.$store.state.goodid;
    }
  }
};
</script>

<style scoped lang='scss'>
</style>