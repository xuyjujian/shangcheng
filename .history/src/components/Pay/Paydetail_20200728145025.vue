<template>
  <div v-if="this.goods.goodsOne" class="mt" >
    <div class="df jc_b">
      <div>
        <img :src="this.goods.goodsOne.image_path" alt />
      </div>
      <div>
        <div>{{this.goods.goodsOne.name}}</div>
        <div class="cr mt">￥{{this.goods.goodsOne.present_price| toFixed(2)}}</div>
      </div>
      <div class="fsl" style="line-height: 105px;margin-right:20px">x{{this.goods.count}}</div>
    </div>
    <van-divider />
    <van-submit-bar :price="num" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    idDirect: {
      type: Boolean,
    },
    address:{
      type:Object
    }
  },
  components: {},
  data() {
    return {
      goods: {},
    };
  },
  methods: {
    onSubmit(){
      
    }
  },
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
    num(){
      let price=this.goods.count*this.goods.goodsOne.present_price
      return price
    }
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
  width: 100px;
  margin: 0px 10px;
  border: #eeeeee solid 1px;
  
}
</style>