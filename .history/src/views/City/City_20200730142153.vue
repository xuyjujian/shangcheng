<template>
  <div>
    <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">城市列表</div>
    </div>
    <van-index-bar>
      <div v-for="(item,index) in this.letter" :key="index">
        <van-index-anchor :index="item" />
        <div>
           <van-cell title="文本" /> 
        </div>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import util from "../../../addicess/util";
import city from "../../../addicess/city";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      cities1: [],
      letter: [],
    };
  },
  methods: {
    icon() {
      this.$router.go(-1);
    },
  },
  mounted() {
    let cities = city.data.cities;
    for (let i in cities) {
      let o = {};
      o[i] = cities[i];
      this.cities1.push(o);
    }
    console.log(this.cities1[0]);
    this.cities1.map((item) => {
      let keys = Object.keys(item);
      this.letter.push(keys[0]);
    });
    console.log(this.cities1);
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
</style>