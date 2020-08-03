<template>
  <div>
    <div class="df fw wt">
      <div v-for="(item,index) in hotGoods" :key="index" class="box df fd_c ai_c" @click="detail(item)">
        <div>
          <img :src="item.image" alt />
        </div>
        <div class="name">{{item.name}}</div>
        <div class="df">
          <div class="ml mr">￥{{item.mallPrice}}</div>
          <div class=" fssr tdl" style="margin-top:2px">￥{{item.price}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    hotGoods: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
     detail(item){
      this.goodsId=item.goodsId
      this.$store.commit('setid',this.goodsId)
      this.$router.push('/details')
      console.log(this.goodsId)
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 185px;
  background-color: white;
  border: 1px solid lightgray;
  .name {
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  img {
    width: 185px;
  }
}
</style>