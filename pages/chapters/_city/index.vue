<template>
<div>
  <main class="Chapter ">
    <div class="Chapter__header container">
        <div v-html="welcome"></div>
        <div class="Chapter__header-image">
            <img src="/gallery/03.jpg">
        </div>
        <div class="Chapter__header-description" v-html="description"></div>
    </div>
    <section class="Chapter__visit">
        <div class="Chapter__visit-image">
            <img :src="'/chapters/' + city + '.png'">
        </div>
        <div class="Chapter__visit-description" v-html="visit">

        </div>
    </section>
  </main>
  <Signup :color="'grey'"/>
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
         let visit
         try {
             let req  = await axios.get('/content/en/chapters/' + city + '/welcome.json')
             let req1 = await axios.get('/content/en/chapters/' + city + '/description.json')
             let req2 = await axios.get('/content/en/chapters/' + city + '/visit.json')
             welcome = req.data.body
             description = req1.data.body
             visit = req2.data.body
         } catch (e) {
             console.log(e)
             welcome = false
             description = false
             visit = false
         }
         return {
             siteKey: "6LfsWVAUAAAAAE5mdeB0ICRoDDkWJd00vr9NEZ3I",
             welcome: welcome ? welcome : null,
             city: city,
             description: description ? description : null,
             visit: visit ? visit : null
         }
     },
     components: {
       Signup
     }
 }
</script>

<style lang="scss">
.Chapter {
    &__header {
        margin: 5%;
        padding: $base-vertical-rithm;
        background: $color-grey;
    }
    &__visit {
        padding: $base-vertical-rithm * 20;
        background: $color-purple;
        width: 100%;
        &-image {
            width: 50%;
            display: inline-block;
            vertical-align: top;
        }
        &-description {
            width: 50%;
            display: inline-block;
            padding-left: $base-vertical-rithm * 20;
            h1,h2,h3,p {
                color: white;
            }
            h1 {
                font-size: 44px;
                line-height: 44px;
            }
        }
    }
}
</style>
