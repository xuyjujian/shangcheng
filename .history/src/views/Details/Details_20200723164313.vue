<template>
  <div >
      <Detailhead :goods="goods" v-if="goods.goodsOne"></Detailhead>
      <Detailbody :goods="goods" v-if="goods.goodsOne"></Detailbody>
  </div>
</template>

<script>
import Detailhead from "../../components/Drtail/Detailhead";
import Detailbody from "../../components/Drtail/Detailbody";
export default {
  name: "",
  props: {},
  components: {
    Detailhead,
    Detailbody,
  },
  data() {
    return {
      goodsid: "",
      goods: {},
      num: 0
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    like() {
      this.num++;
    }
  },
  mounted() {
    this.goodsid = "b1195296679f482aa7d54d95ac2b4a94";
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
  watch: {},
  computed: {
    id() {
      return this.$store.state.goodid;
    }
  }
};
</script>

<style scoped lang='scss'>
.arrowLeft {
  margin: 10px;
  width: 40px;
  height: 40px;
  background-color: gray;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 60px;
}
img {
  width: 90%;
}
.pic {
  padding: 10px;
  border-bottom: 1px solid #f8f8f8;
  border-top: 1px solid #f8f8f8;
}
.color {
  color: #ff0000;
}
</style>