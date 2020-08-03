<template>
  <div>
    <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">城市列表</div>
    </div>
    <div class="wt">
        <van-search v-model="value" placeholder="请输入城市关键词"   background="#F2F2F2"/>
    </div>
    <van-index-bar>
      <div v-for="(item,index) in cities" :key="index" style="background: #F2F2F2;">
        <van-index-anchor :index="index" />
        <div v-for="(item1,index1) in item" :key="index1"> 
           <van-cell :title="item1.name" /> 
        </div>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import city from "../../../addicess/city";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      cities: [],
      value:"",
    };
  },
  methods: {
    icon() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.cities = city.data.cities;
    console.log(this.cities)
    // for (let i in cities) {
    // //   let o = {};
    // //   o[i] = cities[i];
    //   this.cities1.push(cities[i]);
    // }
    // console.log(this.cities1[0]);
    // this.cities1.map((item) => {
    //   let keys = Object.keys(item);
    //   this.letter.push(keys[0]);
    // });
    // console.log(this.cities1);
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