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
            <div>
              <div ></div>
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
      mallCategoryId:-1
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
    category1(item){
      
      console.log(this.mallCategoryId)
      console.log(this.activeKey)

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