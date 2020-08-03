<template>
  <div>
    <Unlogin v-if="this.keys.length===0"></Unlogin>
    <Logined v-else></Logined>
  </div>
</template>

<script>
import Logined from "../../components/Shoppingcar/Logined";
import Unlogin from "../../components/Shoppingcar/Unlogin";
export default {
  name: "",
  props: {},
  components: {
    Unlogin,
    Logined
  },
  data() {
    return {
      user: "",
      keys:[],
    };
  },
  methods: {},
  mounted() {
    this.user = localStorage.getItem("user");
    this.keys=Object.keys(this.user)
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>