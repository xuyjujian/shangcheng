<template>
 <div>

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
         id:'',
         id1:''
     }
   },
   methods: {

   },
   mounted() {
       this.id=this.$route.query.id
       this.id1=this.$route.query._id
       this.$api.postevaluateOne({
           id:this.id,
           _id:this.id1
       }).then(res=>{
           console.log(res)
       }).catch(err => {
        console.log(err);
      });
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>