<template>
  <div>
    <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">城市列表</div>
    </div>
    <van-index-bar>
  <van-index-anchor :index-list="cities1" />
  <van-cell title="文本" />
</van-index-bar>
  </div>
</template>

<script>
import util from '../../../addicess/util'
import city from '../../../addicess/city'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        cities1:[]
    };
  },
  methods: {
      icon() {
      this.$router.go(-1);
    },
  },
  mounted() {
      let cities=city.data.cities
      
      for(let i in cities){
          let o={};
          o[i] = obj[i];
          this.cities1.push(o); 
      }
      console.log(this.cities1)
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