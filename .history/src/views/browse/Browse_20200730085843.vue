<template>
  <div>
    <div class="wt">
      <div class="icon" @click="icon">
        <van-icon name="arrow-left" color="#1989fa" size="20" />
      </div>
      <div class="pt pb fsl tex" style="border-bottom: #EEEEEE solid 1px">最近浏览</div>
    </div>
    <div
      v-for="(item,index) in browse"
      :key="index"
      class="mt"
      style=" border-bottom: #EEEEEE solid 1px;"
    >
      <div class="df">
        <div class="pb">
          <img :src="item.image_path" alt />
        </div>
        <div class="ml">
          <div>{{item.name}}</div>
          <div class="cr mt">￥{{item.present_price | toFixed(2)}}</div>
        </div>
      </div>
      <div class="wt df jc_e">
        <div class="mb mr" @click="close(item)">
          <van-icon name="close" size="20" />
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
      browse: [],
      user: "",
      name:''
    };
  },
  methods: {
    icon() {
      this.$router.go(-1);
    },
    close(item) {
      this.browse.map((item1, index) => {
              if (item1.id === item.id) {
                this.browse.splice(index, 1);
              }
            });
            console.log(this.browse)
            localStorage.setItem(this.name, JSON.stringify(this.browse));
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.name=this.user.nickname+"browse"
    this.browse = JSON.parse(localStorage.getItem(this.name));
    this.browse=this.browse.filter((item,index,array)=>{
          return   array.indexOf(item.id)===index
        })
    //     // localStorage.setItem(name, JSON.stringify(this.browse));
    console.log(this.browse)
    
  },
  watch: {},
  computed: {},
  filters: {
    toFixed(val) {
      return Number(val).toFixed(2);
    },
  },
};
</script>

<style scoped lang='scss'>
.icon {
  position: absolute;
  top: 10px;
  left: 10px;
}
img {
  width: 100px;
}
</style>