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
     
    };
  },
  methods: {},
  mounted() {
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

</style>