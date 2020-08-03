<template>
  <div>456</div>
</template>

<script>
export default {
  name: "",
  props: {
    idDirect: {
      type: Boolean,
    },
    address: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$api.postCard().then(res=>{
      console.log(res)
    })
    console.log(this.idDirect, "111");
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>