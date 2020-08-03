<template>
  <div>
    <div class="df fw wt">
      <div v-for="(item,index) in hotGoods" :key="index" class="box">
        <div>
          <img :src="item.image" alt />
        </div>
        <div class="name">{{item.name}}</div>
        <div class="df">
          <div class="ml mr">{{item.mallPrice}}</div>
          <div class="ml fss tdl">{{item.price}}</div>
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
  methods: {},
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
    width: 187.5px;
  }
}
</style>