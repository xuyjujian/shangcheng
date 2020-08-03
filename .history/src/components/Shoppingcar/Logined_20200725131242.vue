<template>
  <div>
    <div v-if="this.shopList.length===0">
      <div class="zero">
        <img src="../../../项目资料/可能要用的图片/timg.gif" alt />
      </div>
      <div class="wt tex car">购物车居然是空的</div>
     <div class="df jc_c ai_c mt wt">
        <van-button type="info" @click="goto">去逛逛</van-button>
     </div>
    </div>
    <div v-else>
      <div class="wt df jc_b ml ai_c">
        <div>
          <div v-if="this.Select===false" class="df ml">
            <div class="false" @click="all"></div>
            <div>全选</div>
          </div>
          <div v-if="this.Select===true" class="df ml">
            <div class="ture" @click="noall"></div>
            <div>取消全选</div>
          </div>
        </div>
        <div class="total df fd_c ai_c jc_c">
          <div>合计：{{total| toFixed(2)}}}</div>
          <div>请确认订单</div>
        </div>
      </div>
      <div class="df jc_e wt">
        <van-button type="warning" @click="del">删除</van-button>
        <van-button type="warning">去结算</van-button>
      </div>
      <div
        v-for="(item,index) in shopList"
        :key="index"
        class="df pad"
        style=" border-bottom: #EEEEEE solid 1px;"
      >
        <div class="df jc_c ai_c mr">
          <div v-if="item.check===true" @click="clkf(item)">
            <div class="ture"></div>
          </div>
          <div v-if="item.check===false" @click="clkt(item)">
            <div class="false"></div>
          </div>
        </div>
        <div class="pic">
          <img :src="item.image_path" alt />
        </div>
        <div class="ml" style="width:230px">
          <div class="name tex">{{item.name}}</div>
          <div class="df jc_b ai_c price wt">
            <div>￥{{item.mallPrice}}</div>
            <div class="df">
              <div class="add" @click="addgood(item)">+</div>
              <div>{{item.count}}</div>
              <div class="add" @click="reduce(item)">-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    shopList: {
      type: Array,
    },
  },
  components: {},
  data() {
    return {
      count: "",
      goods: [],
      Select: false,
      number: null,
    };
  },
  methods: {
    goto(){
      this.$router.push('/')
    },
    all() {
      this.shopList.map((item) => {
        item.check = true;
      });
      this.Select = true;
    },
    noall() {
      this.shopList.map((item) => {
        item.check = false;
      });
      this.Select = false;
    },
    clkf(item) {
      item.check = false;
      this.Select = this.shopList.every((item) => {
        return item.check;
      });
      console.log(item);
    },
    clkt(item) {
      item.check = true;
      this.Select = this.shopList.every((item) => {
        return item.check;
      });
      console.log(item);
    },
    addgood(item) {
      item.count++;
      this.$api
        .posteditCart({
          count: item.count,
          id: item.cid,
          mallPrice: item.mallPrice,
        })
        .then((res) => {
          console.log(item.count);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    reduce(item) {
      if (item.count >= 2) {
        item.count--;
        this.$api
          .posteditCart({
            count: item.count,
            id: item.cid,
            mallPrice: item.mallPrice,
          })
          .then((res) => {
            // console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.goods=[item.cid]
         this.$api
        .postdeleteShop(this.goods)
        .then((res) => {
          if (res.code === 200) {
            this.$api
              .postCard({})
              .then((res) => {
                if (res.code === 200) {
                  this.$parent.shopList = res.shopList;
                  this.number = res.shopList.length;
                  this.$store.commit("addnum", this.number);
                }
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      }
    },
    del() {
      this.shopList.map((item, index) => {
        if (item.check === true) {
          this.goods.push(item.cid);
        }
      });
      this.$api
        .postdeleteShop(this.goods)
        .then((res) => {
          if (res.code === 200) {
            this.$api
              . postCard({})
              .then((res) => {
                if (res.code === 200) {
                  this.$parent.shopList = res.shopList;
                  this.number = res.shopList.length;
                  this.$store.commit("addnum", this.number);
                }
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {},
  watch: {},
  computed: {
    total() {
      let price = 0;
      this.shopList.map((item) => {
        if (item.check === true) {
          price += item.count * item.mallPrice;
        }
      });
      return price;
    },
  },
  filters: {
    toFixed(val) {
      return Number(val).toFixed(2);
    },
  },
};
</script>

<style scoped lang='scss'>
.zero {
  width: 100%;
  img {
    width: 100%;
  }
}
.pic {
  img {
    width: 90px;
    border: #eeeeee solid 1px;
  }
}
.price {
  margin-top: 50px;
}
.name {
  color: #e0322b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.add {
  width: 20px;
  height: 20px;
  color: white;
  background-color: #747474;
  font-size: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 10px;
  margin: 0 8px;
}
.ture {
  width: 15px;
  height: 15px;
  background-image: url("../../../项目资料/可能要用的图片/icon_checkbox.png");
  background-size: cover;
}
.false {
  width: 15px;
  height: 15px;
  background-image: url("../../../项目资料/可能要用的图片/icon_checkbox.png");
  background-position: 0 -25px;
  background-size: cover;
}
.total {
  height: 60px;
  margin-right: 60px;
}
.car{
  font-size: 20px;
  margin-top: 50px;
}
</style>