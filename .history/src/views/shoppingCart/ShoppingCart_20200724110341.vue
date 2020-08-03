<template>
  <div id="all">
    <h1 class="wt tex fslr mt pb" style="border-bottom:1px solid lightgray">购物车</h1>
    <Logined v-if="this.user&&shopList.length>=0" :shopList="shopList"></Logined>
    <Unlogin v-else></Unlogin>
    
  </div>
</template>

<script>
import Logined from "../../components/Shoppingcar/Logined";
import Unlogin from "../../components/Shoppingcar/Unlogin";
export default {
  name: "",
  props: {},
  components: {
    Unlogin,
    Logined
  },
  data() {
    return {
      user: "",
      shopList:[],
    };
  },
  methods: {},
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.$api.postCard({}).then(res=>{
      if(res.code===200){
        this.shopList=res.shopList
      }
      console.log(res)
    }).catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
#all{
  padding: 50px;
}
</style>