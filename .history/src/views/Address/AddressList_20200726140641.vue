<template>
  <div>
      <div>
          <div v-if="this.list.length===null"></div>
          <div v-else class="wt df jc_c ai_c" style="height:500px">
              <div style="color:#999999;font-size: larger">暂无收货地址~~</div>
          </div>
      </div>
      <div></div>
  </div>
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