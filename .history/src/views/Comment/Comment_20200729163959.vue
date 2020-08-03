<template>
  <div>
    <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">评价中心</div>
    </div>
    <div class="df">
      <div class="wr">
        <img :src="this.good.image_path" alt />
      </div>
      <div class="ml mt">
        <div style=" font-size: 20px;">商品评分</div>
        <div>
          <van-rate v-model="rate" allow-half void-icon="star" void-color="#eee" />
        </div>
      </div>
    </div>
    <div>
      <van-field v-model="content" rows="1" type="textarea" placeholder="说说你的感受吧" class="content" />
    </div>
    <div class="mt mb" style=" font-size: 20px;">
      <van-checkbox v-model="anonymous" icon-size="30px">匿名评价</van-checkbox>
    </div>
    <div class="ma mt" style="width:90%">
      <van-button type="primary" size="large" @click="Submit">主要按钮</van-button>
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
      good: {},
      rate: 0,
      content: "",
      anonymous: false,
      image: [],
    };
  },
  methods: {
    icon() {
      this.$router.go(-1);
    },
    Submit(){
      console.log(this.good.order_id)
      // this.$api.postgoodsOne({
      //    id:this.good.cid, //商品cid
      //   rate:this.rate, //分数
      //   content:this.content, // 内容
      //   anonymous:this.anonymous, // 是否匿名
      //   _id:this.good._id, // 商品的_id
      //   order_id:this.good.order_id, // 商品的order_id
      //   image:this.image
      // }).then(res=>{
      //   this.$toast.success(res.msg);
      //   this.$router.go(-1);
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err);
      // });
    }
  },
  mounted() {
    this.good = this.$route.query.item;
    console.log(this.good);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.icon {
  position: absolute;
  top: 10px;
  left: 10px;
}
img {
  width: 100px;
  margin: 0 30px;
  margin-top: 10px;
}
.content {
  width: 100%;
  height: 200px;
  background-color: #f7f7f7;
}
</style>