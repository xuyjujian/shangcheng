<template>
  <div>
    <div>
      <h1 class="wt tex fslr mt pb" style="border-bottom:1px solid lightgray">商品分类</h1>
      <div class="df" style="height: 100vh;">
        <div class="Sidebar">
          <van-sidebar v-model="activeKey">
            <div v-for="(item,index) in category" :key="index" @click="category1">
              <van-sidebar-item :title="item.mallCategoryName" />
            </div>
          </van-sidebar>
        </div>
        <div>
          <div class="df">
            <div v-for="(item1,index1) in category" :key="index1">
              <div v-if="this.activeKey+1===item1.mallCategoryId">
               <div v-for="(item1,index1) in category.bxMallSubDto" :key="index1">
              <van-tabs v-model="activeName">
                <van-tab :title="item1.mallSubName" :name="item1.mallSubName">内容 1</van-tab>
              </van-tabs>
            </div>
              </div>
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
      activeName:''
    };
  },
  methods: {
    getHomeData() {
      this.$api.getHomeData().then(res => {
        if (res.code === 200) {
          this.category = res.data.category;
        }
      });
    },
    category1() {
      // console.log(item.mallCategoryId)
      console.log(this.activeKey);
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
  height: 100%;
  background-color: #f1f8ff;
}
</style>