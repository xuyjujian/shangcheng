<template>
  <div>
    <h1>商品推荐</h1>
    <div class="wrapper df" ref="wrapper">
      <div class="content df" ref="content">
        <div v-for="(item,index) in recommend" :key="index" class="df box1">
          <div>
            <div class="df jc_c ai_c">
              <img :src="item.image" alt />
            </div>
            <div class="goods mt">{{item.goodsName}}</div>
            <div class="df mb">
              <div class="mr ml">￥{{item.mallPrice}}</div>
              <div class="fss tdl ml" style="margin-top:2px">￥{{item.price}}</div>
            </div>
            <div class="df">
              <van-button type="warning" @click="car"><van-icon name="cart-o" /></van-button>
              <van-button type="danger">立即购买</van-button>
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
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    car(){
      this.$router.push('/my')
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        startX: 0,
        click: true,
        scrollX: true
      });
    });
    console.log(this.hotGoods);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.wrapper {
  overflow: hidden;
  background-color: white;
}
h1{
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