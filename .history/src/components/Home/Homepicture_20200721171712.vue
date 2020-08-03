<template>
  <div class="mt mb">
    <van-swipe :autoplay="3000" >
      <van-swipe-item v-for="(item, index) in slides" :key="index">
        <img :src="item.image" alt="">
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
    return {};
  },
  methods: {},
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