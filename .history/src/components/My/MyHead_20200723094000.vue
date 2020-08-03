<template>
  <div>
    <div class="bgc">
      <div class="df jc_e ai_c">
        <div class="pt pb pr1" style="color:white">
          <van-icon name="setting" />
        </div>
      </div>
      <div>
        <div class="df fd_c jc_c ai_c">
          <div class="mb">
            <img src="../../../项目资料/可能要用的图片/icon.svg" alt />
          </div>
          <div v-if="this.user">欢迎你{{user.nickname}}</div>
          <div style="color:white" @click="loginout" v-if="this.user">退出登录</div>
          <div class="mt" style="color:white" @click="login" v-else>点击登录</div>
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
  methods: {
    login() {
      this.$router.push("/login");
    },
    loginout() {
      this.$api
        .postloginOut({})
        .then(res => {
          if (res.code === 0) {
            localStorage.removeItem("user");
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
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