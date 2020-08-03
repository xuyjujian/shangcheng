<template>
  <div>
      <div class="wt">
          <div class="icon" @click="icon"><van-icon name="arrow-left" color="#1989fa" size="20"/></div>
          <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">地址列表</div>
      </div>
      <div>
          <div v-if="this.list===null" class="wt df jc_c ai_c" style="height:500px">
              <div style="color:#999999;font-size: larger">暂无收货地址~~</div>
          </div>
          <div v-else></div>
      </div>
      <div class="bottom">
          <van-button color="#FF4444" size="large" @click="edit">新增地址</van-button>
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
        list:[]
    };
  },
  methods: {
    getDefaultAddress() {
      this.$api
        .getDefaultAddress()
        .then((res) => {
            if(res.code===200){
                this.list=res.defaultAdd
            }
          console.log(this.list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    edit(){
        this.$router.push('/addressedit')
    },
    icon(){
        this.$router.goto(-1)
    }
  },
  mounted() {
      this.getDefaultAddress()
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
}
.icon{
    position: absolute;
    top: 10px;
    left: 10px;
}
</style>