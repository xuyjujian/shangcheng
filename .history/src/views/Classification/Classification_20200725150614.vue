<template>
  <div id="all">
    <div>
      <h1 class="wt tex fslr mt pb" style="border-bottom:1px solid lightgray">商品分类</h1>
      <div class="df">
        <div class="Sidebar">
          <van-sidebar v-model="activeKey">
            <div v-for="(item,index) in category" :key="index" @click="category1(item)">
              <van-sidebar-item :title="item.mallCategoryName" />
            </div>
          </van-sidebar>
        </div>
        <div>
          <div style="width: 290px;">
            <van-tabs :ellipsis="false" animated v-model="active" @click="data">
              <van-tab
                v-for="(item,index) in bxMallSubDto"
                :key="index"
                :name="item.mallSubId"
                :title="item.mallSubName"
              >
                <div
                  v-for="(item1,index1) in dataList"
                  :key="index1"
                  class="df"
                  style="border-top: solid 1px #EEEEEE;"
                  @click="detail(item1)"
                >
                  <div>
                    <img :src="item1.image_path" alt />
                  </div>
                  <div class="cr">
                    <div>{{item1.name}}</div>
                    <div class="df fss price jc_c ai_c">
                      <div class="ml mr">￥{{item1.present_price}}</div>
                      <div class="fss tdl ml" style="color:black">￥{{item1.orl_price}}</div>
                    </div>
                  </div>
                </div>
              </van-tab>
            </van-tabs>
          </div>
        </div>
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
      category: [],
      activeKey: 0,
      bxMallSubDto: [],
      active: 0,
      dataList: [],
      iddata: "",
      id: -1,
      categorydata: {},
      goodsId:''
    };
  },
  methods: {
    detail(item) {
      this.goodsId = item.id;
      this.$store.commit("setid", this.goodsId);
      this.$router.push("/details");
      console.log(this.goodsId);
    },
    getHomeData() {
      this.$api
        .getHomeData()
        .then(res => {
          if (res.code === 200) {
            this.category = res.data.category;
            // 初始化界面
            this.bxMallSubDto = res.data.category[this.active].bxMallSubDto;
            this.iddata =
              res.data.category[this.active].bxMallSubDto[
                this.active
              ].mallSubId;
            this.$api
              .getClassification(this.iddata)
              .then(res => {
                if (res.code === 200) {
                  this.dataList = res.dataList;
                  console.log(this.dataList, "123");
                }
              })
              .catch(err => {
                console.log(err);
              });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    category1(item) {
      localStorage.removeItem("data");
      this.active = 0;
      this.id = -1;
      if (this.activeKey + 1 === Number(item.mallCategoryId)) {
        this.bxMallSubDto = item.bxMallSubDto;
      }

      this.iddata = this.bxMallSubDto[this.active].mallSubId;
      this.$api
        .getClassification(this.iddata)
        .then(res => {
          if (res.code === 200) {
            this.dataList = res.dataList;
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      console.log(this.activeKey);
      // console.log(Number(item.mallCategoryId));
      // console.log(this.bxMallSubDto);
    },
    data(item, title) {
      localStorage.removeItem("data");
      this.id = -1;
      this.$api
        .getClassification(item)
        .then(res => {
          if (res.code === 200) {
            this.dataList = res.dataList;
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    if (Number(this.$route.query.id) > 0 && Number(this.$route.query.id) <= 5) {
      this.id = Number(this.$route.query.id);
    } else {
      this.id = -1;
    }

    console.log(this.id, "qqq");
    if (this.id === -1) {
      this.getHomeData();
    } else {
      this.activeKey = this.id - 1;
      this.categorydata = JSON.parse(localStorage.getItem("data"));
      this.category = this.categorydata.category;
      this.category.map(item => {
        if (this.id === Number(item.mallCategoryId)) {
          this.bxMallSubDto = item.bxMallSubDto;
          this.iddata = this.bxMallSubDto[0].mallSubId;
          this.$api
            .getClassification(this.iddata)
            .then(res => {
              if (res.code === 200) {
                this.dataList = res.dataList;
              }
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
      this.id = -1;
      console.log(this.id, "eee");
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.Sidebar {
  height: 100vh;
  background-color: #f1f8ff;
}
img {
  width: 80px;
  margin: 10px;
  border: #eeeeee 1px solid;
}
.price {
  height: 80px;
}
#all{
  padding-bottom: 50px;
}
</style>