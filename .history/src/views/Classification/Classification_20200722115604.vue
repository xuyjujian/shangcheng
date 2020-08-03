<template>
  <div>
    <div>
      <h1 class="wt tex fslr mt pb" style="border-bottom:1px solid lightgray">商品分类</h1>
      <div class="df">
        <div class="Sidebar">
          <van-sidebar v-model="activeKey">
            <div v-for="(item,index) in category" :key="index" @click="category1(item)">
              <van-sidebar-item :title="item.mallCategoryName" />
            </div>
          </van-sidebar>
        </div>
        <div>
          <div style="width: 290px;">
            <van-tabs :ellipsis='false' animated v-model="active" @click="data">
             <van-tab v-for="(item,index) in bxMallSubDto" :key='index' :title="item.mallSubName" >123</van-tab>
            </van-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      category: [],
      activeKey: 0,
      bxMallSubDto: [],
      active:0,
      dataList:[]
    };
  },
  methods: {
    getHomeData() {
      this.$api.getHomeData().then(res => {
        if (res.code === 200) {
          this.category = res.data.category;
          this.bxMallSubDto = res.data.category[this.active].bxMallSubDto;
        }
      }).catch(err => {
          console.log(err);
        });
    },
    category1(item) {
      if (this.activeKey + 1 === Number(item.mallCategoryId)) {
        this.bxMallSubDto = item.bxMallSubDto;
      }
      this.active=0
      console.log(this.activeKey);
      // console.log(Number(item.mallCategoryId));
      // console.log(this.bxMallSubDto);
    },
    data(item,title){
      console.log(item.mallSubId)
      console.log('123')
      // this.$api.getClassification(item.mallSubId).then(res =>{
      //   console.log(res)
      // }).catch(err => {
      //     console.log(err);
      //   });
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
.Sidebar {
  height: 100vh;
  background-color: #f1f8ff;
  
}
</style>