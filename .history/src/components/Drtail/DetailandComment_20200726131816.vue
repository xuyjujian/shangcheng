<template>
 <div>
<van-tabs v-model="active" :line-height='heightnum'>
  <van-tab title="商品详情" >
      <div v-html="goods.goodsOne.detail"></div>
  </van-tab>
  <van-tab title="商品评论">内容 2</van-tab>
</van-tabs>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       goods:{
           type:Object
       }
   },
   components: {

   },
   data () {
     return {
         active: 0,
     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>