<template>
  <div v-if="this.goods.goodsOne">
    <div class="df jc_b">
      <div>
        <img :src="this.goods.goodsOne.image_path" alt />
      </div>
      <div>
        <div>{{this.goods.goodsOne.name}}</div>
        <div class="cr mt">￥{{this.goods.goodsOne.present_price| toFixed(2)}}</div>
      </div>
      <div>x{{this.goods.count}}</div>
    </div>
  </div>
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
      goods: {},
    };
  },
  methods: {},
  mounted() {
    console.log(this.idDirect, "111");
    this.$api
      .getGoods(this.goodsid)
      .then((res) => {
        if (res.code === 200) {
          res.goods.count = this.$route.query.count;
          this.goods = res.goods;
        }
        console.log(this.goods);
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
  filters: {
    toFixed(val) {
      return Number(val).toFixed(2);
    },
  },
};
</script>

<style scoped lang='scss'>
img {
  width: 80px;
}
</style>