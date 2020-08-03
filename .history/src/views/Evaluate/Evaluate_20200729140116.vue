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
    <div class="df jc_c ai_c eva">
      <van-tabs v-model="active" class=" mt mb">
        <div class="wrapper " ref="wrapper">
          <div  class="content "> 
            <van-tab title="待评价">
              <div class="df jc_b" v-for="(item,index) in evaluate" :key="index">
                <div class="boxi">
                  <img :src="item.image_path" alt />
                </div>
                <div></div>
                <div></div>
              </div>
            </van-tab>
            <van-tab title="以评价"></van-tab>
          </div>
        </div>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      active: 0,
      evaluate: [],
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
            this.evaluate = res.data.list;
            console.log(this.evaluate);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.gettobeEvaluated();
     new BScroll(this.$refs.wrapper, { click: true, scrollY: true });
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
    width: 300px;
  position: absolute;
  top: 240px;
}
.boxi {
  img {
    width: 100px;
  }
}
.wrapper {
  overflow: hidden; /*--超出部分隐藏 --*/
  height: calc(100vh - 45px);
}
.content {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
</style>