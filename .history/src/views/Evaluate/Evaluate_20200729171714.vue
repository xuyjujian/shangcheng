<template>
  <div>
    <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">评价中心</div>
    </div>
    <div>
      <div class="wt">
        <img src="../../../项目资料/可能要用的图片/evaluate.jpg" alt />
      </div>
      <div class="df jc_c ai_c" style="heigth=100vh">
        <van-tabs v-model="active" class="mt mb eva">
          <div class="wrapper" ref="wrapper">
            <div class="content">
              <van-tab title="待评价">
                <div
                  class="df"
                  v-for="(item,index) in evaluate"
                  :key="index"
                  style="border-bottom: #eeeeee solid 1px;"
                >
                  <div class="boxi">
                    <img :src="item.image_path" alt />
                  </div>
                  <div class="df jc_b">
                    <div style="width:150px">{{item.name}}</div>
                    <div class="df fd jc_c ai_e" @click="comment(item)">
                      <div class="comment">
                        <van-icon name="chat-o" />评论晒单
                      </div>
                    </div>
                  </div>
                </div>
              </van-tab>
              <van-tab title="已评价">
                <div
                  class="df"
                  v-for="(item,index) in evaluate1"
                  :key="index"
                  style="border-bottom: #eeeeee solid 1px;"
                >
                  <div class="boxi">
                    <img :src="item.image_path" alt />
                  </div>
                  <div class="df jc_b">
                    <div style="width:150px">{{item.name}}</div>
                    <div class="df fd jc_c ai_e" @click="comment(item)">
                      <div class="comment">
                        <van-icon name="chat-o" />评论晒单
                      </div>
                    </div>
                  </div>
                </div>
              </van-tab>
            </div>
          </div>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      active: 0,
      evaluate: [],
      evaluate1: [],
    };
  },
  methods: {
    comment(item) {
      this.$router.push({
        path: "/comment",
        query: {
          item: item,
        },
      });
    },
    icon() {
      this.$router.go(-1);
    },
    gettobeEvaluated() {
      this.$api
        .gettobeEvaluated()
        .then((res) => {
          if (res.code === 200) {
            this.evaluate = res.data.list;
            console.log(this.evaluate);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getalreadyEvaluated() {
      this.$api
        .getalreadyEvaluated()
        .then((res) => {
          if (res.code === 200) {
            this.evaluate1 = res.data.list.goods;
          }
          console.log(res.data.list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.gettobeEvaluated();
    this.getalreadyEvaluated();
    new BScroll(this.$refs.wrapper, { click: true, scrollY: true });
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
img {
  width: 100%;
}
.eva {
  width: 340px;
  height: 40px;
  position: absolute;

  top: 240px;
}
.boxi {
  img {
    width: 100px;
  }
}
.wrapper {
  overflow: hidden; /*--超出部分隐藏 --*/
  height: calc(420px - 45px);
}
.content {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
.comment {
  width: 85px;
  height: 30px;
  color: red;
  border: 1px solid red;
  text-align: center;
  line-height: 30px;
  border-radius: 15px;
}
</style>