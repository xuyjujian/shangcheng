<template>
  <div>
    <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">评论详情</div>
    </div>
    <div class="df">
      <div>
        <img src="../../../项目资料/可能要用的图片/icon.svg" alt />
      </div>
      <div class="mt mr">
        <div v-if="this.detail.anonymous===true">匿名用户</div>
        <div v-if="this.detail.anonymous===false">{{this.detail.user[0].nickname}}</div>
        <div>
          <van-rate
            v-model="this.detail.rate"
            readonly
            allow-half
            void-icon="star"
            void-color="#eee"
          />
        </div>
      </div>
      <div class="mt ml">{{this.detail.comment_time}}</div>
    </div>
    <van-cell-group>
      <van-field label="评论内容" :value="this.detail.content" readonly autosize />
    </van-cell-group>
    <div class="df mt ml">
        <div><img :src="this.detail.goods[0].image" alt=""></div>
        <div>{{this.detail.goods[0].name}}</div>
        <div class="shopping"><van-icon name="shopping-cart-o" size="30"  color="#FF3130" /></div>
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
      id: "",
      id1: "",
      detail: {},
    };
  },
  methods: {
    icon() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.id = this.$route.query.id;
    this.id1 = this.$route.query._id;
    this.$api
      .postevaluateOne({
        id: this.id,
        _id: this.id1,
      })
      .then((res) => {
        if (res.code === 200) {
          this.detail = res.evaluateOne;
        }
        console.log(this.detail);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
img {
  width: 60px;
  margin: 10px;
}
.icon {
  position: absolute;
  top: 10px;
  left: 10px;
}
.shopping{
margin-left: 60px;
width: 50px;
height: 50px;
background-color: #FFE6E2;
border-radius: 25px;
text-align: center;
line-height: 50px;
}
</style>