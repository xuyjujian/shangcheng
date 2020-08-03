<template>
  <div v-if="goods.goodsOne">
    <div>
      <div class="arrowLeft" @click="go">
        <van-icon name="arrow-left" size="30" />
      </div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
        <van-swipe-item>
          <img :src="this.goods.goodsOne.image" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="this.goods.goodsOne.image_path" alt />
        </van-swipe-item>
      </van-swipe>
      <div class="pic">
          <div style="font-size: 16px;">{{this.goods.goodsOne.name}}</div>
          <div class="cr" style="font-size: 14px;">￥{{this.goods.goodsOne.present_price}}</div>
      </div>
      <div class="df jc_b ai_c fss pad" style="color:#999999">
          <div>运费： {{this.goods.count}}</div>
          <div>剩余： {{this.goods.goodsOne.amount}}</div>
          <div class="df" style="width: 76px;">
              <div v-if="this.num%2===0">收藏</div>
              <div v-if="this.num%2===1">取消收藏</div>
              <div  @click="like"><van-icon name="like" size="20" :class="{color:num%2===1}"/></div>
          </div>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      goodsid: "",
      goods: {},
      num:0,
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    like(){
        this.num++
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
.pic{
    padding: 10px;
    border-bottom: 1px solid #F8F8F8;
    border-top: 1px solid #F8F8F8;
}
.color{
    color: #FF0000;
}
</style>