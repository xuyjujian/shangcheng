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
          <div class="df">
            <div>
              <img :src="this.goods.goodsOne.image_path" alt />
            </div>
            <div class="mt">
              <div>{{this.goods.goodsOne.name}}</div>
              <div class="cr mt">￥{{198| toFixed(2)}}</div>
            </div>
          </div>
          <div></div>
          <div></div>
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
  width: 100px;
  margin: 0 10px;
}
</style>