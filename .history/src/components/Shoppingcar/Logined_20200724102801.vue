<template>
  <div>
    <div v-if="this.shopList.length===0">
      <div class="zero">
        <img src="../../../项目资料/可能要用的图片/timg.gif" alt />
      </div>
      <div>购物车居然是空的</div>
    </div>
    <div v-else>
      <div v-for="(item,index) in shopList" :key="index" class="df pad" style=" border-bottom: #EEEEEE solid 1px;">
        <div></div>
        <div class="pic"><img :src="item.image_path" alt=""></div>
        <div>
          <div style="color:#E0322B">{{item.name}}</div>
          <div class="df jc_b ai_c price">
            <div>￥{{item.present_price}}</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    shopList: {
      type: Array,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.zero {
  width: 100%;
  img {
    width: 100%;
  }
}
.pic{
  img{
    width: 90px;
    border: #EEEEEE solid 1px;
  }
}
.price{
  margin-top: 30px;
}
</style>