<template>
  <div>{{id}}</div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      goodsid: ""
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getGoods(this.id)
      .then(res => {
          console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
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
</style>