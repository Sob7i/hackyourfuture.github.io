<template>
  <div>
    <Main class="Contact container">
      <div class="Contact__header">
        <h1>Frequently Asked Questions</h1>
      </div>

      <nuxt-link :to="'/'" class="Contact__quicklink">Take me<br> to <span class="underline">contact</span></nuxt-link>
      <div class="Contact__content" v-html="content">
      </div>
    </Main>

  </div>
</template>

<script>
import axios from '~/plugins/axios'

 export default {
     async asyncData () {
         let dates
         let content
         try {
             let req  = await axios.get('/content/en/contact-questions.json')
             content = req.data.body
         } catch (e) {
             console.log(e)
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
.Contact {
  position: relative;
  &__header {
    padding: $base-vertical-rithm * 10;
    h1 {
      // margin: $base-vertical-rithm * 10;
      margin-bottom: $base-vertical-rithm * 2;
      width: 20%;
      color: $color-purple;
      font-weight: bold;
      font-size: 52px;
      line-height: 60px;
      display: inline-block;
    }
    &-image {
      width: 55%;
      display: inline-block;
    }
  }
  &__quicklink {
    position: absolute;
    margin: $base-vertical-rithm * 10;
    font-weight: bold;
    font-size: 18px;
    span:after {
      bottom: -5px;
    }
  }
  &__content {
    width: 40%;
    margin-left: 50%;
    color: $color-purple;
    h4 {
      font-weight: bold;
    }
  }
}
</style>

