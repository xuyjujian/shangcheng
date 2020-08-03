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
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    icon() {
      this.$router.go(-1);
    },
  },
  mounted() {},
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
</style>