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
      <div class="flx pt pb" @click="evaluated" :badge="evanum">
        <div>
          <van-icon name="label-o" size="30" />
        </div>
        <div>评价</div>
      </div>
      <div class="flx pt pb">
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
    };
  },
  methods: {
    evaluated() {
      this.$router.push("/evaluate");
    },
  },
  mounted() {
    this.$api
      .gettobeEvaluated()
      .then((res) => {
        if (res.code === 200) {
          this.evanum = res.data.count;
          console.log(this.evanum);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>