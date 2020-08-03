<template>
  <div id="all">
      <Detailhead :goods="goods" v-if="goods.goodsOne"></Detailhead>
      <Detailbody :goods="goods" v-if="goods.goodsOne"></Detailbody>
      <DetailandComment :goods="goods" v-if="goods.goodsOne"></DetailandComment>
      <Detailbottom :goods="goods" v-if="goods.goodsOne"></Detailbottom>
  </div>
</template>

<script>
import Detailhead from "../../components/Drtail/Detailhead";
import Detailbody from "../../components/Drtail/Detailbody";
import Detailbottom from "../../components/Drtail/Detailbottom";
import DetailandComment from "../../components/Drtail/DetailandComment";
export default {
  name: "",
  props: {},
  components: {
    Detailhead,
    Detailbody,
    Detailbottom,
    DetailandComment
  },
  data() {
    return {
      goodsid: "",
      goods: {},
      user:''
    };
  },
  methods: {
    
   
  },
  mounted() {
    this.goodsid = this.id;
    this.$api
      .getGoods(this.goodsid)
      .then(res => {
        if (res.code === 200) {
          this.goods = res.goods;
        }
      })
      .catch(err => {
        console.log(err);
      });
      this.user = JSON.parse(localStorage.getItem("user"));
    let name = this.user.nickname + "browse";
    if (localStorage.getItem(name)) {
      let browse = JSON.parse(localStorage.getItem(name));
      browse.push(this.goods.goodsOne);
      console.log(browse);
      localStorage.setItem(username, JSON.stringify(browse));
    } else {
      let browse = [];
      browse.push(this.goods.goodsOne);
      localStorage.setItem(username, JSON.stringify(browse));
    }
  },
  watch: {},
  computed: {
    id() {
      return this.$store.state.goodid;
    }
  }
};
</script>

<style scoped lang='scss'>
#all{
    padding-bottom: 50px;
}
</style>