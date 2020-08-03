<template>
  <div>
    <div class="df jc_c ai_c wt pr" style="border-bottom: #F5F6F8 1px solid;">
      <div class="fsl" style="padding:15px;">个人资料</div>
      <div class="left" @click="left">
        <van-icon name="arrow-left" size="20" color="#52A6FB" />
      </div>
    </div>
    <div style="padding:15px;border-bottom: #F5F6F8 1px solid; ">github</div>
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
      nickname: "",
      username:'',

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
          this.username = res.userInfo.username;
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