<template>
  <div>
    <div v-if="this.shopList.length===0">
      <div class="zero">
        <img src="../../../项目资料/可能要用的图片/timg.gif" alt />
      </div>
      <div>购物车居然是空的</div>
    </div>
    <div v-else>
      <div
        v-for="(item,index) in shopList"
        :key="index"
        class="df pad"
        style=" border-bottom: #EEEEEE solid 1px;"
      >
        <div></div>
        <div class="pic">
          <img :src="item.image_path" alt />
        </div>
        <div class="ml" style="width:230px">
          <div class="name">{{item.name}}</div>
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
      goods:[]
    };
  },
  methods: {
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
        console.log(this.goods)
         this.$api
        .postdeleteShop({
          cid: this.goods
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {},
  watch: {},
  computed: {},
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
</style>