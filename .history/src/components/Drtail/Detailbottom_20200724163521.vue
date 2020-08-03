<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="num" @click="car" />
      <van-goods-action-button type="warning" text="加入购物车" @click="add" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      number: 0,
      user: {},
    };
  },
  methods: {
    add() {
      console.log(this.goods);
      if (this.user) {
        this.$api
          .postaddShop({
            id: this.id,
          })
          .then((res) => {
            if (res.code === 200) {
              this.$toast.success(res.msg)
              this.$api
                .postCard({}).then((res1) => {
                  if (res1.code === 200) {
                    this.number = res1.shopList.length;
                    console.log('购物车',res1);
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
};
</script>

<style scoped lang='scss'>
</style>