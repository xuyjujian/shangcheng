<template>
 <div>
   <div class="df jc_c ai_c">
     <div class="flx pt pb " style="padding-left:25px">
       <div><van-icon name="pending-payment" size="30"/></div>
       <div>待付款</div>
     </div>
     <div class="flx pt pb">
       <div><van-icon name="tosend" size="30"/></div>
       <div>待发货</div>
     </div>
     <div class="flx pt pb">
       <div><van-icon name="logistics" size="30"/></div>
       <div>待收货</div>
     </div>
     <div class="flx pt pb">
       <div><van-icon name="label-o" size="30"/></div>
       <div>评价</div>
     </div>
     <div class="flx pt pb">
       <div><van-icon name="points" size="30" /></div>
       <div>已完成</div>
     </div>
   </div>
   <van-cell-group>
  <van-cell title="单元格" icon="records" s-link/>
  <br>
  <van-cell title="单元格" icon="points" s-link/>
  <van-cell title="单元格" icon="gold-coin-o" s-link/>
  <van-cell title="单元格" icon="gift-o" s-link/>
</van-cell-group>
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