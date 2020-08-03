<template>
  <div>
    <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">收藏列表</div>
    </div>
    <div v-for="(item,index) in collection" :key="index" class="mt" style=" border-bottom: #EEEEEE solid 1px;">
      <div class="df">
        <div class="pb">
          <img :src="item.image_path" alt />
        </div>
        <div class="ml">
          <div>{{item.name}}</div>
          <div class="cr mt">￥{{item.present_price | toFixed(2)}}</div>
        </div>
      </div>
      <div class="wt df jc_e mb mr">
          <div><van-icon name="close" /></div>
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
      collection: [],
    };
  },
  methods: {
    icon() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.collection = JSON.parse(localStorage.getItem("collection"));
    console.log(this.collection);
  },
  watch: {},
  computed: {},
  filters: {
    toFixed(val) {
      return Number(val).toFixed(2);
    },
  },
};
</script>

<style scoped lang='scss'>
.icon {
  position: absolute;
  top: 10px;
  left: 10px;
}
img {
  width: 100px;
}
</style>