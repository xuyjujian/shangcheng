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
      user:'',
    };
  },
  methods: {
    like() {
      if(this.user){
        if (this.num % 2 === 0) {
        this.$api
          .postCollection(this.goods.goodsOne)
          .then((res) => {
            if (res.code === 200) {
              JSON.parse(localStorage.getItem("user"));
              this.$api
                .postisCollection({
                  id: this.goods.goodsOne.id,
                })
                .then((res) => {
                  if (res.code === 200) {
                    this.num = res.isCollection;
                  }
                  console.log(res, "qqq");
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
        this.$api
          .postcancelCollection({
            id: this.goods.goodsOne.id,
          })
          .then((res1) => {
            if (res1.code === 200) {
              console.log(res1);
              this.$api
                .postisCollection({
                  id: this.goods.goodsOne.id,
                })
                .then((res) => {
                  if (res.code === 200) {
                    this.num = res.isCollection;
                  }
                  console.log(res, "qqq");
                })
                .catch((err) => {
                  console.log(err);
                });0
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
      }
      else{
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
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    if(this.user){
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
    }
    
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