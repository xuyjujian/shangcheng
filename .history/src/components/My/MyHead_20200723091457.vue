<template>
  <div>
    <div class="bgc">
      <div class="df jc_e ai_c">
        <div class="pt pb pr1" style="color:white">
          <van-icon name="setting" />
        </div>
      </div>
      <div>
        <div class="df fd_c jc_c ai_c" v-if="this.user">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="df fd_c jc_c ai_c" v-else>
            <div class="mb"><img src="../../../项目资料/可能要用的图片/icon.svg" alt=""></div>
            <div class="mt" style="color:white">点击登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      user: {}
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
.bgc {
  background-color: #e30c7b;
  height: 220px;
  .van-icon {
    font-size: 20px;
  }
}
</style>