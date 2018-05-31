<template>
<div>
  <main class="Chapter">
    <div v-html="chapter_welcome"></div>
  </main>
  <Signup  :color="'grey'"/>
</div>
</template>

<script>
import axios from '~/plugins/axios'
import Signup from '~/components/signup/Signup';
 export default {
     async asyncData ({ params }) {
         let city = params.city
         let chapter_welcome
         try {
             let req  = await axios.get('/content/en/chapter-' + city + '-welcome.json')
             chapter_welcome = req.data.body
         } catch (e) {
             console.log(e)
             chapter_welcome = false
         }
         return {
             siteKey: "6LfsWVAUAAAAAE5mdeB0ICRoDDkWJd00vr9NEZ3I",
             chapter_welcome: chapter_welcome ? chapter_welcome : null
         }
     },
     components: {
       Signup
     }
 }
</script>

<style lang="scss">
.Chapter {
    margin: 5%;
    padding: $base-vertical-rithm;
}
</style>
