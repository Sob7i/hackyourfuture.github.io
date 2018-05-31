<template>
<div>
  <main class="Chapter container">
    <div class="Chapter__header">
        <div v-html="welcome"></div>
        <div class="Chapter__header-image">
            <img src="/gallery/03.jpg">
        </div>
        <div class="Chapter__header-description" v-html="description"></div>
    </div>
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
         let welcome
         let description
         try {
             let req  = await axios.get('/content/en/chapters/' + city + '/welcome.json')
             let req1 = await axios.get('/content/en/chapters/' + city + '/description.json')
             welcome = req.data.body
             description = req1.data.body
         } catch (e) {
             console.log(e)
             welcome = false
             description = false
         }
         return {
             siteKey: "6LfsWVAUAAAAAE5mdeB0ICRoDDkWJd00vr9NEZ3I",
             welcome: welcome ? welcome : null,
             description: description ? description : null
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
