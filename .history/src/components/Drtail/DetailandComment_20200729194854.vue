<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="商品详情">
        <div v-html="goods.goodsOne.detail"></div>
      </van-tab>
      <van-tab title="商品评论">
        <div v-for="(item,index) in evalute1" :key="index" class="df">
          <div>
        <img src="../../../项目资料/可能要用的图片/icon.svg" alt />
       <div class="mt mr">
        <div v-if="item.anonymous===true">匿名用户</div>
        <div v-if="item.anonymous===false">{{item.user[0].nickname}}</div>
        <div>
          <van-rate
            v-model="item.rate"
            readonly
            allow-half
            void-icon="star"
            void-color="#eee"
          />
        </div>
      </div>
      <div class="mt ml">{{item.comment_time}}</div>
    </div>
    <van-cell-group>
      <van-field label="评论内容" :value="item.content" readonly autosize />
    </van-cell-group>
      </van-tab>
    </van-tabs>
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
      active: 0,
      evalute:[],
      evalute1:[],
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getalreadyEvaluated()
      .then((res) => {
        if(res.code===200){
          this.evalute=res.data.list
          this.evalute.map(item=>{
            if(item.goods[0].id===this.goods.goodsOne.id){
              this.evalute1.push(item)
            }
          })
        }
        console.log(this.evalute1,"qwer");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
    heightnum() {
      return this.$store.state.heightnum;
    },
  },
};
</script>

<style scoped lang='scss'>
img {
  width: 60px;
  margin: 10px;
}
</style>