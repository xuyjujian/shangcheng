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
      <div></div>
      <div></div>
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
  width: 70px;
  margin: 10px;
}
.icon {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>