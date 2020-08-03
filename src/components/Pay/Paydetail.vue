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
    idDirect1: {
      type: String,
    },
    address:{
      type:Object
    }
  },
  components: {},
  data() {
    return {
      goods: {},
      goods1: {},
      orderId:[],
       idDirect: null,
    };
  },
  methods: {
    onSubmit(){
      this.orderId.push(this.goods.goodsOne.id)
      this.$api.postOrder({
         address:this.address.address, 
        tel:this.address.tel, // 电话
        orderId:this.orderId, // 所有商品的id(数组)
        totalPrice:this.num/100, // 总价格
        idDirect:this.idDirect, // 用来判断是购物车结算还是直接购买(直接购买为true, 购物车结算为false)
        count:this.goods.count // 商品数量
      }).then(res=>{
        if(res.code===200){
          this.$toast.success(res.msg);
          this.$router.push('/')
        }
        console.log(res)
      }).catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.idDirect=true
    console.log(this.address)
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
      this.goods=JSON.parse(localStorage.getItem("this.list"));
  },
  watch: {},
  computed: {
    goodsid() {
      return this.$store.state.goodid;
    },
    num(){
      let price=this.goods.count*this.goods.goodsOne.present_price*100
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