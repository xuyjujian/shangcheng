<template>
  <div>
    <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">评价中心</div>
    </div>
    <div class="wt">
      <img src="../../../项目资料/可能要用的图片/evaluate.jpg" alt />
    </div>
    <div class="df jc_c ai_c">
      <van-tabs v-model="active" class="eva">
        <van-tab title="待评价"></van-tab>
        <van-tab title="以评价"></van-tab>
      </van-tabs>
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
      active: 0,
      num: null,
    };
  },
  methods: {
    icon() {
      this.$router.go(-1);
    },
    gettobeEvaluated() {
      this.$api
        .gettobeEvaluated()
        .then((res) => {
          if (res.code === 200) {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
      this.gettobeEvaluated()
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
  width: 100%;
}
.eva {
  width: 90%;
  position: absolute;
  top: 240px;
}
</style>