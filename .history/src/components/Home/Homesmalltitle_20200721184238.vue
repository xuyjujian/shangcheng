<template>
 <div class="title tex df jc_c ai_c">
     <div class="icon">
         <slot name="icon"></slot>
     </div>
     <div class="fsl">
         <slot name="title"></slot>
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
.title{
    color: red;
}
.icon{
    background-color: red;
    color: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>