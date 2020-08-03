<template>
  <div>
    <Logined v-if="this.user"></Logined>
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
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>