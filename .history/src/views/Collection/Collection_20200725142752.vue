<template>
  <div></div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    postisCollection() {
      this.$api.postisCollection({id:this.id}).then(res=>{
          console.log(res)
      }).catch(err => {
        console.log(err);
      });
    },
  },
  mounted() {
      this.postisCollection()
  },
  watch: {},
  computed: {
    id() {
      return this.$store.state.goodid;
    },
  },
};
</script>

<style scoped lang='scss'>
</style>