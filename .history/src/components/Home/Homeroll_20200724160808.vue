<template>
  <div>
    <h1>商品推荐</h1>
    <div class="wrapper df" ref="wrapper">
      <div class="content df" ref="content">
        <div v-for="(item,index) in recommend" :key="index" class="df box1">
          <div>
            <div class="df jc_c ai_c">
              <img :src="item.image" alt @click="detail(item)" />
            </div>
            <div class="goods mt">{{item.goodsName}}</div>
            <div class="df mb">
              <div class="mr ml">￥{{item.mallPrice}}</div>
              <div class="fss tdl ml" style="margin-top:2px">￥{{item.price}}</div>
            </div>
            <div class="df">
              <van-button type="warning" @click="add(item)">
                <van-icon name="cart-o" />
              </van-button>
              <van-button type="danger" @click="buy">立即购买</van-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "",
  props: {
    recommend: {
      type: Array,
    },
  },
  components: {},
  data() {
    return {
      goodsId: "",
      shoppingnum: null,
      user: {},
      number:null
    };
  },
  methods: {
    add(item) {
      if (this.user) {
        this.$api
          .postCard({})
          .then((res) => {
            if (res.code === 200) {
              this.number = res.shopList.length;
              this.$store.commit("addnum", this.number);
            }
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        this.$api
          .postaddShop({
            id: item.goodsId,
          })
          .then((res) => {
            if (res.code === 200) {
              this.$toast.success(res.msg);
            }
            console.log(res);
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
    buy() {
      if (this.user) {
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
    detail(item) {
      this.goodsId = item.goodsId;
      this.$store.commit("setid", this.goodsId);
      this.$router.push("/details");
      console.log(this.goodsId);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        startX: 0,
        scrollX: true,
        click: true,
      });
    });
    console.log(this.hotGoods);
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.wrapper {
  overflow: hidden;
  height: 100%;
  background-color: white;
}
h1 {
  font-size: 25px;
  width: 100%;
  background-color: white;
}
.box1 {
  width: 150px;
  border: 1px solid lightgray;
  img {
    width: 130px;
  }
}
.goods {
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>