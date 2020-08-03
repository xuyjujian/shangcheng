<template>
  <div></div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        list:[]
    };
  },
  methods: {
    getDefaultAddress() {
      this.$api
        .getDefaultAddress()
        .then((res) => {
            if(res.code===200){
                this.list=res.defaultAdd
            }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
      this.getDefaultAddress()
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>