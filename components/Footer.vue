<template>
  <div class="columns">
    <div class="column">
      <p>Stichting Hack Your Future</p>
      <p>KvK: 64992160</p>
      <p>Address: Herengracht, 504 1017 CB Amsterdam</p>
      <p>Contact: info@hackyourfuture.net</p>
      <p>Copyright © HackYourFuture 2017</p>
    </div>
    <div class="column has-text-right">
      <SmashButton><i class="fa fa-facebook"></i>Facebook</SmashButton><br/>
      <SmashButton><i class="fa fa-twitter"></i>Twitter</SmashButton><br/>
      <SmashButton><i class="fa fa-github"></i>Github</SmashButton>
    </div>
  </div>
</template>
<style scoped>
 .column {
   padding: 50px;
   color: #fff;
   background: #555;
   font-size: 0.8em;
 }
 .SmashButton {
   font-size: 0.8em;
   line-height: 2em;
   width: 300px;
   text-align: center;
 }
 .fa {
   font-size: 2em;
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
