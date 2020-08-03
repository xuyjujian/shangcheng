<template>
  <div>
    <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">城市列表</div>
    </div>
    <van-index-bar>
  <van-index-anchor :index-list="cities" />
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
        cities:[]
    };
  },
  methods: {
      icon() {
      this.$router.go(-1);
    },
  },
  mounted() {
      for(let i in city.data){
          this.cities.push(city.data[i])
      }
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