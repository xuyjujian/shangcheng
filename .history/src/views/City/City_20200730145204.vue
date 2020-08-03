<template>
  <div>
    <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">城市列表</div>
    </div>
    <div class="wt" style="background: #F2F2F2;">
        <van-search v-model="value" placeholder="请输入城市关键词" />
    </div>
    <div>当前城市</div>
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