<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="num" />
      <van-goods-action-button type="warning" text="加入购物车" @click="add" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
<van-popup v-model="show" position="bottom" :style="{ height: '30%' }">内容</van-popup>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      shoppingnum: null,
       show: false,
    };
  },
  methods: {
    add() {
      this.shoppingnum++;
      this.$store.commit("addnum", this.shoppingnum);
    }
  },
  mounted() {},
  watch: {},
  computed: {
    num() {
      return this.$store.state.num;
    }
  }
};
</script>

<style scoped lang='scss'>
</style>