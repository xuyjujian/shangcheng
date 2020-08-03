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
            <img :src="this.good.image_path" alt="">
        </div>
        <div class="ml mt">
            <div style=" font-size: 20px;">商品评分</div>
            <div></div>
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
        good:{},
    };
  },
  methods: {
    icon() {
      this.$router.go(-1);
    },
  },
  mounted() {
      this.good=this.$route.query.item
      console.log(this.good)
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
img{
    width: 100px;
    margin: 10px 30px;
   
}
</style>