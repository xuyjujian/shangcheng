<template>
 <div>
{{id}}
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
    //    console.log(id)
   },
   watch: {

   },
   computed: {
       id(){
           return this.$store.state.goodid
       }
   }
 }
</script>

<style scoped lang='scss'>

</style>