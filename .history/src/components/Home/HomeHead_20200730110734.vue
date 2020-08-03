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
  mounted() {
    let _this=this
    AMap.plugin('AMap.Geolocation', function() {
  var geolocation = new AMap.Geolocation({
    // 是否使用高精度定位，默认：true
    enableHighAccuracy: true,
    // 设置定位超时时间，默认：无穷大
    timeout: 10000,
    // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
    buttonOffset: new AMap.Pixel(10, 20),
    //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    zoomToAccuracy: true,     
    //  定位按钮的排放位置,  RB表示右下
    buttonPosition: 'RB'
  })

  geolocation.getCurrentPosition()
  AMap.event.addListener(geolocation, 'complete', onComplete)
  AMap.event.addListener(geolocation, 'error', onError)

  function onComplete (data) {
    // data是具体的定位信息
    console.log(data)
  }

  function onError (data) {
    // 定位出错
  }
})
  },
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