<template>
  <div class="df jc_b ai_c homeHead">
    <div class="df box">
      <div class="mr ml">成都</div>
      <div class="mr">
        <van-icon name="arrow-down" />
      </div>
    </div>
    <div class=" box">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          class="pl"
        >
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
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
         value: '',
    };
  },
  methods: {
      onSearch(){
          console.log(this.value)
      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  .van-search{
      background-color: #F2F2F2;
  }
}
.homeHead{
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: #F2F2F2
}
</style>