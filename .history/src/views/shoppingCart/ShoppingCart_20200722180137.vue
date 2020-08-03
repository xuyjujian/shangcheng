<template>
  <div>
    <Logined v-if="this.nser"></Logined>
    <Unlogin v-else></Unlogin>
    
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
    };
  },
  methods: {},
  mounted() {
    this.user = localStorage.getItem("user");
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>