<template>
  <div >
      <Detailhead :goods="goods" v-if="goods.goodsOne"></Detailhead>
      <Detailbody :goods="goods" v-if="goods.goodsOne"></Detailbody>
      <Detailbottom></Detailbottom>
  </div>
</template>

<script>
import Detailhead from "../../components/Drtail/Detailhead";
import Detailbody from "../../components/Drtail/Detailbody";
import Detailbottom from "../../components/Drtail/Detailbottom";
export default {
  name: "",
  props: {},
  components: {
    Detailhead,
    Detailbody,
    Detailbottom,
  },
  data() {
    return {
      goodsid: "",
      goods: {},
      
    };
  },
  methods: {
    
   
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

</style>