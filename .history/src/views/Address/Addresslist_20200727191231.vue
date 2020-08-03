<template>
  <div>
    <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">地址列表</div>
    </div>
    <div>
      <div v-if="this.list===null" class="wt df jc_c ai_c" style="height:500px">
        <div style="color:#999999;font-size: larger">暂无收货地址~~</div>
      </div>
    </div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="select"
    />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      chosenAddressId: "",
      list: [{ id: "", name: "", tel: "", address: "", isDefault: "" }],
    };
  },
  methods: {
    getAddress() {
      this.$api
        .getAddress()
        .then((res) => {
          if (res.code === 200) {
            res.address.map((item, index) => {
              this.$set(item, "id", item._id);
            });
            this.list = res.address;
          }
          console.log(this.list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onAdd() {
      this.$router.push("/addressedit");
    },
    onEdit(item, index) {
      this.$router.push('/edit')
    },
    select(item) {
      this.chosenAddressId = item.id;
    },
    icon() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.getAddress();
    this.$api.getDefaultAddress().then(res=>{
      this.chosenAddressId=res.defaultAdd._id
      console.log(res)
    }).catch((err) => {
          console.log(err);
        });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.icon {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>