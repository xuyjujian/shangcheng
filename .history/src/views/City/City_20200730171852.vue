<template>
  <div>
    <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">城市列表</div>
    </div>
    <div class="wt" style="background: #F2F2F2;">
      <van-search v-model="value" placeholder="请输入城市关键词" @input="search1" />
      <div class="search">
        <div></div>
      </div>
    </div>
    <div style="background: #F2F2F2; padding:5px 10px">当前城市</div>
    <div class="wt pb pt">
      <div class="city">{{city}}</div>
    </div>
    <div style="background: #F2F2F2; padding:5px 10px">热门城市</div>
    <div class="df fw">
      <div v-for="(item,index) in hotCities" :key="index" class="hotcity mt mb mr">
        <div>{{item.name}}</div>
      </div>
    </div>

    <van-index-bar>
      <div v-for="(item,index) in cities" :key="index" style="background: #F2F2F2;">
        <van-index-anchor :index="index" />
        <div v-for="(item1,index1) in item" :key="index1">
          <van-cell :title="item1.name" />
        </div>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import city from "../../../addicess/city";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      cities: [],
      value: "",
      city: "",
      hotCities: [],
      search: [],
    };
  },
  methods: {
    icon() {
      this.$router.go(-1);
    },
    search1() {
      if (this.value === "") {
        this.search = [];
        return
      }
      for (let i in this.cities) {
          console.log('123')
        if (
          i.toLocaleUpperCase() === this.value ||
          i.toLocaleLowerCase() === this.value
        ) {
            console.log('qwe')
          this.search = this.cities[i];
           console.log(this.search);
          return;
        }
      }
      let arr = [];
      for (let i in this.cities) {
        arr.push(this.cities[i]);
      }
      arr.map((item) => {
        item.map((item1) => {
          if(JSON.stringify(item1).indexOf(this.value) > -1){
              this.search.push(item1);
          }
        });
      });
      console.log(this.search);
      // let keys=Object.keys(this.cities)
      // console.log(keys)
      // keys.map(item=>{
      //     if(item.toLocaleUpperCase()===this.value||item.toLocaleLowerCase()===this.value){
      // console.log(this.search,"qwe")
      //     }
      // })
    },
  },
  mounted() {
    this.cities = city.data.cities;
    this.hotCities = city.data.hotCities;

    console.log(this.search);
    let _this = this;
    AMap.plugin("AMap.Geolocation", function () {
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
        buttonPosition: "RB",
      });

      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", onComplete);
      AMap.event.addListener(geolocation, "error", onError);

      function onComplete(data) {
        // data是具体的定位信息
        _this.city = data.addressComponent.city;
        console.log(_this.city, "123");
      }

      function onError(data) {
        // 定位出错
      }
    });
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
.city {
  width: 55px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-left: 10px;
  border: 1px #cccccc solid;
}
.hotcity {
  width: 26%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-left: 10px;
  border: 1px #cccccc solid;
}
.search {
  position: absolute;
  top: 80px;
  left: 50px;
  width: 300px;
  background: white;
}
</style>