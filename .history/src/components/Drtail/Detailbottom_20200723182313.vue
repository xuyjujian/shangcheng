<template>
 <div>
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服"  />
  <van-goods-action-icon icon="cart-o" text="购物车" :badge="num" />
  <van-goods-action-button type="warning" text="加入购物车" @click="add"/>
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         
     }
   },
   methods: {
add(){
    this.num++
}
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