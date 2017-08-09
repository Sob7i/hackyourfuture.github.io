<template>
  <div>
    <Triangles :imgs="imgs" width="1000" height="1200" :size="150" :orientation="1" class="svg"/>
  </div>
</template>
<style>
 .svg svg{
   width: 100%;
   min-height: 100%;
 }
</style>
<script>
 import Triangles from '~/components/svg/Triangles'
 import Colors from '~/constants/colors'
 import mentors from '~/constants/mentors'
 export default {
   components: {
     Triangles
   },
   data () {
     return {
       imgs: mentors,
       Colors
     }
   }
 }
</script>
