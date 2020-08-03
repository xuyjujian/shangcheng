<template>
  <div>
    <div class="arrowLeft" @click="go">
      <van-icon name="arrow-left" size="30" />
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
      <van-swipe-item v-for="(item, index) in goodsimg" :key="index" >
        <img :src="item" alt @click="getimg(item,index)"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {ImagePreview} from 'vant';
export default {
  name: "",
  props: {
    goods: {
      type: Object
    }
  },
  components: {},
  data() {
    return {
      goodsimg:[]
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    getimg(item,index){
       ImagePreview({
       images: this.goodsimg,
      showIndex:true,
      loop:false,
      startPosition:index

  })

    }
  },
  mounted() {
    this.goodsimg=[this.goods.goodsOne.image,this.goods.goodsOne.image_path]
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.arrowLeft {
  margin: 10px;
  width: 40px;
  height: 40px;
  background-color: gray;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 60px;
}
img {
  width: 90%;
}
</style>