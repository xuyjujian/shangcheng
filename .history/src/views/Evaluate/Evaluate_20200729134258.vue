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
      <van-tabs v-model="active" class="eva mt mb">
        <div class="wrapper df" ref="wrapper">
            <div class="content df" ref="content">
                <van-tab title="待评价">
            <div class="df jc_b" v-for="(item,index) in evaluate" :key="index">
                <div class="boxi">
                    <img :src="item.image_path" alt="">
                </div>
                <div></div>
                <div></div>
            </div>
        </van-tab>
            </div>
        </div>
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
      evaluate:[],

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
              this.evaluate=res.data.list
            console.log(this.evaluate);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
      this.gettobeEvaluated()
       this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        starty: 0,
        scrolly: true,
        click: true,
      });
    });
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
.boxi{
    img{
        width: 100px;
    }
}
</style>