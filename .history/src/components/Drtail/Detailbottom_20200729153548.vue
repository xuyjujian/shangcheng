<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="num" @click="car" />
      <van-goods-action-button type="warning" text="加入购物车" @click="add" />
      <van-goods-action-button type="danger" text="立即购买" @click="showPopup" />
      <van-popup
        v-model="show"
        closeable
        close-icon="close"
        close-icon-position="top-right"
        position="bottom"
        :style="{ height: '30%' }"
      >
        <div>
          <div class="df"  style=" border: #eeeeee solid 1px;z-index: 999;">
            <div>
              <img :src="this.goods.goodsOne.image_path" alt />
            </div>
            <div class="mt">
              <div>{{this.goods.goodsOne.name}}</div>
              <div class="cr mt">￥{{this.goods.goodsOne.present_price| toFixed(2)}}</div>
            </div>
          </div>
          <div class="df jc_b mb">
            <div class="mt">
              <div class="ml">购买数量:</div>
              <div class="df ml">
                <div class="fss " style="color:#999999;">剩余:{{this.goods.goodsOne.amount}}件</div>
                <div class="fss cr">每人限购50件</div>
              </div>
            </div>
            <div class="mt mr"><van-stepper v-model="value" min="1" max="50" /></div>
          </div>
          <div class="mt">
            <van-button type="danger" size="large" @click="buy">立即购买</van-button>
          </div>
        </div>
      </van-popup>
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goods: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {
      number: 0,
      user: {},
      show: false,
      value:1,
      idDirect:1
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    add() {
      console.log(this.goods);
      if (this.user) {
        this.$api
          .postaddShop({
            id: this.id,
          })
          .then((res) => {
            if (res.code === 200) {
              this.$toast.success(res.msg);
              this.$api
                .postCard({})
                .then((res1) => {
                  if (res1.code === 200) {
                    this.number = res1.shopList.length;
                    console.log("购物车", res1);
                    this.$store.commit("addnum", this.number);
                  }
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
            // console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$dialog
          .confirm({
            message: "您还未登录，请您先的登录",
          })
          .then(() => {
            this.$router.push("/login");
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    car() {
      this.$router.push("/shoppingcart");
    },
    buy(){
      this.$router.push({
      path:'/pay',
      query:{
        idDirect:this.idDirect,
        count:this.value
      }
      })
      this.goods.count=this.value
      localStorage.setItem("this.list", JSON.stringify(this.goods));
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  watch: {},
  computed: {
    num() {
      return this.$store.state.num;
    },
    id() {
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
  margin: 10px;
  border: #eeeeee solid 1px;
  
}
</style>