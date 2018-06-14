<template>
  <div>
    <Main class="Teach container">
      <div class="Teach__header">
        <div class="Teach__header-image">
          <img src="/gallery/03.jpg">
        </div>
        <h1>Welcoming Top-Notch trainers</h1>
      </div>
      
      <div class="Teach__container">
        <div class="Teach__container-links">
          <nuxt-link :to="'/'">Check-out our<br> <span class="underline">curriculum</span></nuxt-link>
          <nuxt-link :to="'/chapters'">Setup your <br><span class="underline">chapter</span></nuxt-link>
        </div>
        <div class="Teach__container-content" v-html="content"></div>
      </div>
    </Main>

  </div>
</template>

<script>
import axios from '~/plugins/axios'

 export default {
     async asyncData () {
         let content
         try {
             let req  = await axios.get('/content/en/teach/teach-content.json')
             content = req.data.body
         } catch (e) {
             console.log(e)
             content = false
             content = false
         }
         return {
             siteKey: "6LfsWVAUAAAAAE5mdeB0ICRoDDkWJd00vr9NEZ3I",
             content: content ? content : null
         }
     },
     components: {
     }
 }
</script>

<style lang="scss">
.Teach {
  &__header {
    padding: $base-vertical-rithm * 10;
    h1 {
      margin: $base-vertical-rithm * 10;
      margin-bottom: $base-vertical-rithm * 2;
      width: 30%;
      color: $color-purple;
      font-weight: bold;
      font-size: 60px;
      line-height: 70px;
      display: inline-block;
    }
    &-image {
      width: 60%;
      display: inline-block;
      vertical-align: top;
    }
   
  }
  &__container {
    margin: 0 $base-vertical-rithm * 10;
    &-links {
      margin-left: $base-vertical-rithm * 10;
      width: 25%;
      display: inline-block;
      a {
        display: block;
        margin-top: 40px;
        font-weight: bold;
        font-size: 18px;
        .underline:after {
          bottom: -5px;
        }
        &:nth-child(1) {
          margin-top:0;
        }
      }
    }
    &-content {
      width: 50%;
      display: inline-block;
      vertical-align: top;
    }
  }
  
}
</style>

