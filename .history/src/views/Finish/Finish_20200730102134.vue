<template>
  <div>
    <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">我的订单</div>
    </div>
    <van-tabs v-model="active" scrollspy sticky>
      <van-tab title="全部">
        <div style="background:#F2F2F2">
          <div v-for="(item,index) in list" :key="index" class="df jc_c ai_c wt">
            <div class="box">
              <div class="mt mb" style="border-bottom: #EEEEEE solid 1px ">订单编号:{{item.order_id}}</div>
              <div v-for="(item1,index1) in item.order_list" :key="index1">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待支付"></van-tab>
      <van-tab title="待发货"></van-tab>
      <van-tab title="待收货"></van-tab>
      <van-tab title="已完成">123</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      active: null,
      list: [],
    };
  },
  methods: {
    icon() {
      this.$router.go(-1);
    },
    getMyOrder() {
      this.$api
        .getMyOrder()
        .then((res) => {
          if (res.code === 200) {
            this.list = res.list;
          }
          console.log(this.list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getMyOrder();
    this.active = this.$route.query.num;
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.icon {
  position: absolute;
  top: 10px;
  left: 10px;
}
.box{
  width: 90%;
}
</style>