<template>
  <div class="mt mb">
    <van-swipe :autoplay="3000" >
      <van-swipe-item v-for="(item, index) in slides" :key="index" >
        <img :src="item.image" alt="" @click="detail(item)">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    slides: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
      goodsId:''
    };
  },
  methods: {
    detail(item){
      this.goodsId=item.goodsId
      this.$store.commit('setid',this.goodsId)
      this.$router.push('/details')
      console.log(this.goodsId)
    }
    
  },
  mounted() {
    // console.log(this.slides, "picture");
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
img{
    width: 100%;
}
</style>