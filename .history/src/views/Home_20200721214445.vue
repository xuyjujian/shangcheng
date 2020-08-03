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
    
  </div>
</template>

<script>
import HomeHead from "../components/Home/HomeHead";
import Homepicture from "../components/Home/Homepicture";
import Homecategory from "../components/Home/Homecategory";
import Homeroll from "../components/Home/Homeroll";
import Homesmalltitle from '../components/Home/Homesmalltitle';
import HomeMain from '../components/Home/HomeMain'
export default {
  name: "",
  props: {},
  components: {
    HomeHead,
    Homepicture,
    Homecategory,
    Homeroll,
    Homesmalltitle,
    HomeMain
  },
  data() {
    return {
      slides:[],
      category:[],
      advertesPicture:{},
      recommend:[],
      floorName:{},
      floor1:[]
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