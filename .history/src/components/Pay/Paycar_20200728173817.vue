<template>
  <div class="mt">
    <div class="df jc_b" v-for="(item,index) in goodslist" :key="index">
      <div>
        <img :src="item.image_path" alt />
      </div>
      <div>
        <div>{{item.name}}</div>
        <div class="cr mt">￥{{item.present_price| toFixed(2)}}</div>
      </div>
      <div class="fsl" style="line-height: 105px;margin-right:20px">x{{item.count}}</div>
    </div>
    <van-divider />
    <van-submit-bar :price="num" button-text="提交订单" @submit="onSubmit(item)" />
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    address: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {
      list: [],
      orderId: [],
      goodslist: [],
      idDirect:null
    };
  },
  methods: {
    onSubmit(item) {
      this.goodslist.map((item) => {
        this.orderId.push(item.cid);
      });
      console.log(this.orderId,"aaa");
      // this.$api.postOrder({
      //    address:this.address.address,
      //   tel:this.address.tel, // 电话
      //   orderId:this.orderId, // 所有商品的id(数组)
      //   totalPrice:this.num/100, // 总价格
      //   idDirect:this.idDirect, // 用来判断是购物车结算还是直接购买(直接购买为true, 购物车结算为false)
      //   count:this.goods.count // 商品数量
      // }).then(res=>{
      //   if(res.code===200){
      //     this.$toast.success(res.msg);
      //     this.$router.push('/')
      //   }
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err);
      // });
    },
  },
  mounted() {
    this.idDirect=this.$route.query.idDirect
    console.log(this.idDirect)
    this.goodslist = JSON.parse(localStorage.getItem("this.list"));
    console.log(JSON.parse(localStorage.getItem("this.list")));
  },
  watch: {},
  computed: {
    num() {
      let price = 0;
      this.goodslist.map((item) => {
        price += item.count * item.present_price * 100;
      });
      return price;
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
  width: 100px;
  margin: 0px 10px;
  border: #eeeeee solid 1px;
}
</style>