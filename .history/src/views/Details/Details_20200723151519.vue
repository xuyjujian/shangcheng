<template>
  <div>
    <div>
      <div class="arrowLeft" @click="left">
        <van-icon name="arrow-left" size="30" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      goodsid: "",
      goods: {}
    };
  },
  methods: {},
  mounted() {
    this.goodsid = this.id;
    this.$api
      .getGoods(this.goodsid)
      .then(res => {
        if (res.code === 200) {
          this.goods = res.goods;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {
    left() {
      this.$router.go(-1);
    }
  },
  computed: {
    id() {
      return this.$store.state.goodid;
    }
  }
};
</script>

<style scoped lang='scss'>
.arrowLeft {
  width: 40px;
  height: 40px;
  background-color: gray;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 60px;
}
</style>