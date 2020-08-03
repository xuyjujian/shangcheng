<template>
 <div>
     <div class="box df mb">
         <div v-for="(item,index) in category" :key="index" class="df fd_c jc_c ai_c flx">
             <div> <img :src="item.image" alt=""></div>
             <div>{{item.mallCategoryName}}</div>
         </div>
     </div>
     <div class="mt box2">
         <img :src="this.advertesPicture.PICTURE_ADDRESS" alt="">
     </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       category:{
           type:Array
       },
       advertesPicture:{
           type:Object
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
.box{
    width: 90%;
    background-color: white;
    box-shadow: 2px 2px 4px gray;
    font-size: 12px;
    border-radius: 10px;
    margin: 0 auto;
    img{
        width: 75%;
        margin: 10px;
    }
}
.box2{
    width: 95%;
    margin: 0 auto;
    img{
        width: 100%;
    }
}
</style>