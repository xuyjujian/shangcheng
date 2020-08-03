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
            <van-tabs :ellipsis='false' animated v-model="active1">
             <van-tab v-for="(item,index) in bxMallSubDto" :key='index' :title="item.mallSubName" @click="dataList(item)"></van-tab>
            </van-tabs>
          </div>
          <div></div>
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
      active1:0,
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
      });
    },
    category1(item) {
      if (this.activeKey + 1 === Number(item.mallCategoryId)) {
        this.bxMallSubDto = item.bxMallSubDto;
      }
      console.log(this.activeKey);
      console.log(Number(item.mallCategoryId));
      console.log(this.bxMallSubDto);
    },
    dataList(){
      // this.$api.`getClassification()${item.mallSubId}`.then(res =>{

      // })
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