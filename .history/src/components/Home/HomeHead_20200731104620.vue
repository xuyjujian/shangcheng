<template>
  <div class="df jc_b ai_c homeHead pr">
    <div class="df box">
      <div class="mr ml">{{city}}</div>
      <div class="mr" @click="city1">
        <van-icon name="arrow-down" />
      </div>
    </div>
    <div class="box">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @change="onSearch"
        @click="clk"
        @blur="blu"
        class="pl"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
    <div class="search">
      <div v-for="(item,index) in list" :key="index">
        <div class="mt mb df jc_c" style="border-bottom: #EEEEEE solid 1px" @click="val(item)">
          <div>{{item}}</div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="search1">
      <div v-for="(item,index) in goods" :key="index">
        <div
          class="mt mb"
          style="border-bottom: #EEEEEE solid 1px"
          v-html="item.name"
          @click="detail(item)"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import util from "../../../addicess/util";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      city: "",
      goods: [],
      goodsId: "",
      user: "",
      history1: "",
      list: [],
    };
  },
  methods: {
    clk() {
      this.history1 = this.user.nickname + "search";
      this.list = JSON.parse(localStorage.getItem(this.history1));
      this.list=this.list.filter((item,index,array)=>{
        return array.indexOf(item)===index
      })
    },
    blu(){
      
    },
    val(item) {
      this.value = item;
      this.list=[]
    },
    getsearch() {
      let history = this.user.nickname + "search";
      if (localStorage.getItem(history)) {
        let search = JSON.parse(localStorage.getItem(history));
        search.push(this.value);
        console.log(search, "123");
        localStorage.setItem(history, JSON.stringify(search));
      } else {
        let search = [];
        search.push(this.value);
        localStorage.setItem(history, JSON.stringify(search));
      }
    },
    onSearch() {
      if (this.value === "") {
        this.goods = [];
        return;
      }
      this.$api
        .postSearch({
          value: this.value,
        })
        .then((res) => {
          this.goods = res.data.list;
          console.log(this.goods);
          this.goods.map((item) => {
            console.log(this.value);
            item.name = item.name.replace(
              this.value,
              `<span style="color:red;">${this.value}</span>`
            );
          });
          this.getsearch();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    city1() {
      this.$router.push("/city");
    },
    detail(item) {
      this.goodsId = item.id;
      console.log(item.id);
      this.$store.commit("setid", this.goodsId);
      this.$router.push("/details");
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
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
.box {
  .van-search {
    background-color: #f2f2f2;
  }
}
.homeHead {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: #f2f2f2;
}
.search {
  position: absolute;
  top: 40px;
  left: 150px;
  background: white;
}
.search1{
  position: absolute;
  top: 40px;
  left: 150px;
  width: 150px;
  background: white;
}
</style>