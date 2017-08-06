<template>
  <div>
    <SmashButton>About us</SmashButton>

    <SmashButton>Donate</SmashButton>

    <SmashButton>Teach</SmashButton>

    <SmashButton>Apply</SmashButton>
  </div>
</template>

<style scoped>
 div {
   display: inline-block;
   width: auto;
   overflow: hidden;
   margin: 0 auto;
   margin-top: 20px;
   padding: 0 4px;
 }

 .SmashButton {
   margin: 10px 20px;
   font-size: 12px;
   background: #fff;
 }
</style>

<script>
 import SmashButton from '~/components/SmashButton'

 export default {
   components: {
     SmashButton
   }
 }
</script>
