<template>
  <div>
    <div class="df jc_b">
      <div>
        <div v-for="(item,index) in floor1" :key="index" class="df fd" @click="detail(item)">
          <div v-if="index===0||index===3">
            <img :src="item.image" alt />
          </div>
        </div>
      </div>
      <div>
        <div v-for="(item,index) in floor1" :key="index" class="df fd" @click="detail(item)">
          <div v-if="index!==0&&index!==3">
            <img :src="item.image" alt />
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
    floor1: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
        goodsId:''
    };
  },
  methods: {
    detail(item) {
      this.goodsId = item.goodsId;
      this.$store.commit("setid", this.goodsId);
      this.$router.push("/details");
      console.log(this.goodsId);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
img {
  width: 187.5px;
}
</style>