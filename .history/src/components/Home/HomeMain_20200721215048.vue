<template>
 <div>
     <div class="df fw box1">
         <div v-for="(item,index) in floor1" :key="index" class="pic">
             <img :src="item.image" alt="">
         </div>
     </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       floor1:{
           type:Array
       }
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
.box1{
    width: 100%;
    .pic{
        width: 25%;
    }
}
</style>