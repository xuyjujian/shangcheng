<template>
  <div>
    <van-cell-group>
      <van-cell title="全部订单" icon="records" is-link />
      <br />
      <van-cell title="收藏商品" icon="points" is-link @click="collection"/>
      <van-cell title="地址管理" icon="gold-coin-o" is-link @click="address"/>
      <van-cell title="最近浏览" icon="gift-o" is-link />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      user:''
    };
  },
  methods: {
    collection(){
      if(this.user){
        this.$router.push('/collection')
      }else{
        this.$dialog
          .confirm({
            message: "您还未登录，请您先的登录",
          })
          .then(() => {
            this.$router.push("/login");
          })
          .catch(() => {
            // on cancel
          });
      }
      
    },
    address(){
      if(this.user){
        this.$router.push('/addresslist')
      }else{
        this.$dialog
          .confirm({
            message: "您还未登录，请您先的登录",
          })
          .then(() => {
            this.$router.push("/login");
          })
          .catch(() => {
            // on cancel
          });
      }
      
    }
  },
  mounted() {
     this.user = JSON.parse(localStorage.getItem("user"));
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>