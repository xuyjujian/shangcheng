<template>
  <div>
    <router-view></router-view>
    <div><van-tabbar  v-model="active" class="box1">
      <van-tabbar-item icon="wap-home-o" @click="home">商城</van-tabbar-item>
      <van-tabbar-item icon="orders-o" @click="classification">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" :badge="num" @click="shoppingcart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" @click="my">我的</van-tabbar-item>
    </van-tabbar></div>
    
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      active: 0
    };
  },
  methods: {
    home() {
      
      this.$router.push('/')
    },
    classification() {
      this.$router.push('/classification')
    },
    shoppingcart() {
      this.$router.push('/shoppingcart')
    },
    my() {
      this.$router.push('/my')
    },
  },
  mounted() {},
  watch: {
    '$route.path':{
      handler(val){
        console.log(val,'wei')
      },
      immediate:true
    }
  },
  computed: {
    num() {
      return this.$store.state.num;
    }
  }
};
</script>

<style scoped lang='scss'>
.box1{
  position: fixed;
  bottom: 0;
  z-index: 999;
}

</style>