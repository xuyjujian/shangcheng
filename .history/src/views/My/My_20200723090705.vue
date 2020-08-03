<template>
  <div>
    <div class="df jc_c ai_c wt">
      <div class="fsl" style="padding:15px">会员中心</div>
    </div>
    <MyHead></MyHead>
    <MyBody></MyBody>
    <MyBottom></MyBottom>
  </div>
</template>

<script>
import MyHead from '../../components/My/MyHead'
import MyBottom from '../../components/My/MyBottom'
import MyBody from '../../components/My/MyBody'
export default {
  name: "",
  props: {},
  components: {
    MyHead,
    MyBottom,
    MyBody
  },
  data() {
    return {
      user:{}
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
.bgc{
  background-color: #E30C7B;
  .van-icon{
    font-size: 20px;
  }
}
</style>