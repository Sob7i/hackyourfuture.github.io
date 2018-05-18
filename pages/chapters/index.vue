<template>
  <div>
    <div class="Chapters__map">

    </div>
    <Main class="Chapters container">
      <div class="Chapters__information">
        <h1>get with the program</h1>
        <div v-html="chapters_info"></div>
         <div class="Chapters__information-image">
          <img src="/gallery/03.jpg">
        </div>
      </div>
    </Main>
    <Signup :color="'grey'"/>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import Signup from '~/components/signup/Signup';
 export default {
     async asyncData () {
         let chapters_info
         try {
             let req  = await axios.get('/content/en/chapters_info.json')
             chapters_info = req.data.body
         } catch (e) {
             console.log(e)
             chapters_info = false
         }
         return {
             siteKey: "6LfsWVAUAAAAAE5mdeB0ICRoDDkWJd00vr9NEZ3I",
             chapters_info: chapters_info ? chapters_info : null
         }
     },
     components: {
       Signup
     }
 }
</script>

<style lang="scss">
.Chapters {
  &.container {
    margin-bottom: 200px;
  }
  
  &__information {
    padding: $base-vertical-rithm * 10;
    &-image {
      margin-top: $base-vertical-rithm * 10;
      width: 50%;
      margin-left: 25%;
          margin-bottom: -250px;
    }
    h1 {
      width: 25%;
      margin: $base-vertical-rithm * 5;
      margin-right: $base-vertical-rithm * 15;
      margin-top: 0px;
      color: $color-purple;
      font-weight: normal;
      font-size: 42px;
      line-height: 50px;
      display: inline-block;
      vertical-align: top;
    }
    & > div {
      width: 50%;
      display: inline-block;
      vertical-align: top;
    }
  }
}
</style>

