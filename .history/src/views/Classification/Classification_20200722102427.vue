<template>
  <div>
    <div>
      <h1 class="wt tex fslr mt pb" style="border-bottom:1px solid lightgray">商品分类</h1>
      <div class="df" >
        <div class="Sidebar"  >
          <van-sidebar v-model="activeKey">
            <div v-for="(item,index) in category" :key='index' @click="category1(item)">
            <van-sidebar-item :title="item.mallCategoryName" />
            </div>
          </van-sidebar>
        </div>
        <div>
          <div class="df">
              <div v-for="(item1,index1) in bxMallSubDto" :key='index1'>
                <div>{{item1.mallSubName}}</div>
              </div>
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
      bxMallSubDto:[]
    };
  },
  methods: {
    getHomeData() {
      this.$api.getHomeData().then(res => {
        if (res.code === 200) {
          this.category = res.data.category;
          // this.bxMallSubDto=res.data.category[0].bxMallSubDto
        }
      });
    },
    category1(item){
      if(this.activeKey+1===Number(item.mallCategoryId)){
        this.bxMallSubDto.pop()
        this.bxMallSubDto.push(
          item.bxMallSubDto
        )
      }
      console.log(this.activeKey)
      console.log(Number(item.mallCategoryId))
      console.log(this.bxMallSubDto)

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
.Sidebar{
  height: 100vh;
  background-color: #F1F8FF;
}
</style>