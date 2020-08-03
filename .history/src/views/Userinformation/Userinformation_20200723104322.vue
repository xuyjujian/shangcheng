<template>
  <div>
    <div class="df jc_c ai_c wt pr">
      <div class="fsl" style="padding:15px">个人资料</div>
      <div class="left" @click="left">
        <van-icon name="arrow-left" size="20" color="#52A6FB" />
      </div>
    </div>
    <van-cell-group>
      <van-field v-model="nickname" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      nickname: ""
    };
  },
  methods: {
    left() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.$api
      .postqueryUser()
      .then(res => {
        if (res.code === 200) {
          this.nickname = res.userInfo.nickname;
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.left {
  position: absolute;
  left: 25px;
}
</style>