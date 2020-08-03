<template>
  <div>
    <div>
      <div class="pic">
        <div style="font-size: 16px;">{{this.goods.goodsOne.name}}</div>
        <div class="cr" style="font-size: 14px;">￥{{this.goods.goodsOne.present_price}}</div>
      </div>
      <div class="df jc_b ai_c fss pad" style="color:#999999; border-bottom: 1px solid #F8F8F8;">
        <div>运费： {{this.goods.count}}</div>
        <div>剩余： {{this.goods.goodsOne.amount}}</div>
        <div class="df jc_e" style="width: 76px; ">
          <div v-if="this.num%2===0">收藏</div>
          <div v-if="this.num%2===1">取消收藏</div>
          <div @click="like">
            <van-icon name="like" size="20" :class="{color:num%2===1}" />
          </div>
        </div>
      </div>
    </div>
    <div class="pt pb" style=" border-bottom: 1px solid #F8F8F8;">
      <van-cell is-link value="进入店铺" icon="shop-o">
        <template #title>
          <span class="custom-title">有赞的店</span>
          <van-tag type="danger">官方</van-tag>
        </template>
      </van-cell>
    </div>
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
      num: 0,
    };
  },
  methods: {
    like() {
      if (this.num % 2 === 0) {
        this.$api
          .postCollection(this.goods.goodsOne)
          .then((res) => {
            if (res.code === 200) {
              let Collectiongood=Collectiongood.push(this.goods.goodsOne)
               localStorage.setItem("Collectiongood",Collectiongood);
            }
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$api.postcancelCollection
      }
    },
  },
  mounted() {
    this.$api
      .postisCollection({
        id: this.goods.goodsOne.id,
      })
      .then((res) => {
        if (res.code === 200) {
          this.num = res.isCollection;
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.goods.goodsOne);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.color {
  color: #ff0000;
}
.pic {
  padding: 10px;
  border-bottom: 1px solid #f8f8f8;
  border-top: 1px solid #f8f8f8;
}
</style>