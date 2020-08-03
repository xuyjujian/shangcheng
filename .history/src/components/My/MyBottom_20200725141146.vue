<template>
  <div>
    <van-cell-group>
      <van-cell title="全部订单" icon="records" is-link />
      <br />
      <van-cell title="收藏商品" icon="points" is-link @click="collection"/>
      <van-cell title="地址管理" icon="gold-coin-o" is-link />
      <van-cell title="最近浏览" icon="gift-o" is-link />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    collection(){
      this.$router.push('/collection')
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>