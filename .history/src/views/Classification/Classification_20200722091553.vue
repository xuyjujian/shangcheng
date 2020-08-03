<template>
  <div>
    <div>
      <h1 class="wt tex fslr mt mb pb" style="border-bottom:1px solid lightgray">商品分类</h1>
      <div class="df " style="height: 100vh;">
        <div class="Sidebar">
          <van-sidebar v-model="item.mallCategoryId">
            <div v-for="(item,index) in category" :key='index' >
            <van-sidebar-item :title="item.mallCategoryName" />
            </div>
          </van-sidebar>
        </div>
        <div></div>
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
    };
  },
  methods: {
    getHomeData() {
      this.$api.getHomeData().then(res => {
        if (res.code === 200) {
          this.category = res.data.category;
        }
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
.Sidebar{
  height: 100%;
  background-color: #F1F8FF;
}
</style>