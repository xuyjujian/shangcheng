<template>
 <div>
     <div class="df fw ">
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
.pic{
    width: 187.5px;
}
</style>