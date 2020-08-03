<template>
  <div></div>
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
    return {
      list:[],
      orderId:[]
    };
  },
  methods: {},
  mounted() {
    this.$api.postCard().then(res=>{
      if(res.code===200){
        this.list=res.shopList
      }
      console.log(this.list)
    }).catch(err => {
        console.log(err);
      });
    console.log(this.idDirect, "111");
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>