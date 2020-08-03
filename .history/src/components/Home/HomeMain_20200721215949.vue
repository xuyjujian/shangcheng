<template>
 <div>
     <div class="df jc_b">
        <div>
             <div v-for="(item,index) in floor1" :key="index" class="df fd">
             <div v-if="index===0&&index===3"><img :src="item.image" alt=""></div>
         </div>
        </div>
         <!-- <div>
             <div v-for="(item,index) in floor1" :key="index" class="df fd">
             <div v-if="index!==0&&index!==3"><img :src="item.image" alt=""></div>
         </div>
         </div> -->
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
img{
    width: 187.5px;
}
</style>