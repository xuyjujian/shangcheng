<template>
  <div class="mb">
    <div class="df jc_c ai_c">
      <div class="flx pt pb" style="padding-left:25px">
        <div>
          <van-icon name="pending-payment" size="30" />
        </div>
        <div>待付款</div>
      </div>
      <div class="flx pt pb">
        <div>
          <van-icon name="tosend" size="30" />
        </div>
        <div>待发货</div>
      </div>
      <div class="flx pt pb">
        <div>
          <van-icon name="logistics" size="30" />
        </div>
        <div>待收货</div>
      </div>
      <div class="flx pt pb" @click="evaluated">
        <div>
          <van-icon name="label-o" size="30"  />
        </div>
        <div>评价</div>
      </div>
      <div class="flx pt pb" @click="finsh">
        <div>
          <van-icon name="points" size="30" />
        </div>
        <div>已完成</div>
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
      evanum: null,
      num: null,
    };
  },
  methods: {
    finsh() {
      if (this.user) {
        this.num = 4;
        this.$router.push({
          path: "/finish",
          query: {
            num: this.num,
          },
        });
      } else {
        this.$dialog
          .confirm({
            message: "您还未登录，请您先的登录",
          })
          .then(() => {
            this.$router.push("/login");
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    evaluated() {
      this.$router.push("/evaluate");
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.$api
      .gettobeEvaluated()
      .then((res) => {
        if (res.code === 200) {
          this.evanum = res.data.count;
        }
      })
      .catch((err) => {
        console.log(err);
      });
      if(this.evanum===0){
        this.evanum=null
      }
      console.log(this.evanum);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>