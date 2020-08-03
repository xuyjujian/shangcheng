<template>
 <div>
   <div class="df jc_c ai_c wt pr">
      <div class="fsl" style="padding:15px">个人资料</div>
      <div class="left" @click="left"><van-icon name="arrow-left" size="20" color="blue"/></div>
    </div>
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
     left(){
      this.$router.go(-1)
    },
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
.left{
  position: absolute;
  left: 30px;
}
</style>