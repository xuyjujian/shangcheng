<template>
  <div class="box">
    <!-- 定位/搜索 -->
    <HomeHead ></HomeHead>
    <!-- 轮播图 -->
    <Homepicture :slides="slides" v-if="slides.length>0"></Homepicture>
    <!-- 分类 -->
    <Homecategory :category="category" :advertesPicture='advertesPicture' v-if="category.length>0"></Homecategory>
    <!-- 滚动图片 -->
    <Homeroll :recommend='recommend' v-if="recommend.length>0"></Homeroll>
    <!-- 插槽 -->
    <Homesmalltitle>
      <template #icon>1F</template>
      <template #title>{{floorName.floor1}}</template>
    </Homesmalltitle>
    <!-- 分类展示 -->
    <HomeMain :floor1='floor1' v-if="floor1.length>0"></HomeMain>
    <Homesmalltitle>
      <template #icon>2F</template>
      <template #title>{{floorName.floor2}}</template>
    </Homesmalltitle>
    <!-- 分类展示 -->
    <HomeMain :floor1='floor2' v-if="floor2.length>0"></HomeMain>
    <Homesmalltitle>
      <template #icon>3F</template>
      <template #title>{{floorName.floor3}}</template>
    </Homesmalltitle>
    <!-- 分类展示 -->
    <HomeMain :floor1='floor3' v-if="floor3.length>0"></HomeMain>
    <Homesmalltitle>
      <template #icon></template>
      <template #title>热销商品</template>
    </Homesmalltitle>
    <!-- 热销商品 -->
    <HomehotGoods :hotGoods='hotGoods' v-if="hotGoods.length>0"></HomehotGoods>
  </div>
</template>

<script>
import HomeHead from "../components/Home/HomeHead";
import Homepicture from "../components/Home/Homepicture";
import Homecategory from "../components/Home/Homecategory";
import Homeroll from "../components/Home/Homeroll";
import Homesmalltitle from '../components/Home/Homesmalltitle';
import HomeMain from '../components/Home/HomeMain'
import HomehotGoods from '../components/Home/HomehotGoods'
export default {
  name: "",
  props: {},
  components: {
    HomeHead,
    Homepicture,
    Homecategory,
    Homeroll,
    Homesmalltitle,
    HomeMain,
    HomehotGoods
  },
  data() {
    return {
      slides:[],
      category:[],
      advertesPicture:{},
      recommend:[],
      floorName:{},
      floor1:[],
      floor2:[],
      floor3:[],
      hotGoods:[]
    };
  },
  methods: {
    getHomeData() {
      this.$api
        .getHomeData()
        .then(res => {
         if(res.code===200){
           this.slides = res.data.slides;
           this.category= res.data.category
           this.advertesPicture=res.data.advertesPicture
           this.recommend=res.data.recommend
           this.floorName=res.data.floorName
           this.floor1=res.data.floor1
           this.floor2=res.data.floor2
           this.floor3=res.data.floor3
           this.hotGoods=res.data.hotGoods
         }
          console.log(this.floorName,"qqq");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getHomeData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  background-color: #f2f2f2;
  width: 100vw;
  padding: 50px 0;
}

</style>