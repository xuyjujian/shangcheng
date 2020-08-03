<template>
  <div>
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
            <van-tabs :ellipsis='false' animated v-model="active" @click="data">
             <van-tab v-for="(item,index) in bxMallSubDto" :key='index' :name='item.mallSubId' :title="item.mallSubName" >
               <div v-for="(item1,index1) in dataList" :key="index1" class="df">
                 <div><img :src="item1.image_path" alt=""></div>
                 <div>
                   <div>{{item1.name}}</div>
                   <div class="df">
                     <div>{{item1.present_price}}</div>
                     <div>{{item1.orl_price}}</div>
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
      active:0,
      dataList:[],
      iddata:''
    };
  },
  methods: {
    getHomeData() {
      this.$api.getHomeData().then(res => {
        if (res.code === 200) {
          this.category = res.data.category;
          // 初始化界面
          this.bxMallSubDto = res.data.category[this.active].bxMallSubDto;
          this.iddata=res.data.category[this.active].bxMallSubDto[this.active].mallSubId
          this.$api.getClassification(this.iddata).then(res =>{
           if(res.code===200){
             this.dataList=res.dataList
             console.log(this.dataList,"123")
           }  
      }).catch(err => {
          console.log(err);
        });
        }
      }).catch(err => {
          console.log(err);
        });
    },
    category1(item) {
      if (this.activeKey + 1 === Number(item.mallCategoryId)) {
        this.bxMallSubDto = item.bxMallSubDto;
      }
      this.active=0
      console.log(this.activeKey);
      // console.log(Number(item.mallCategoryId));
      // console.log(this.bxMallSubDto);
    },
    data(item,title){
     
      this.$api.getClassification(item).then(res =>{
        if(res.code===200){

        }
        console.log(res)
      }).catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getHomeData();
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
img{
  width: 150px;
}
</style>