<template>
  <div>
    <Landscape />
    <Main class="Main container">
      <section class="About">
        <div class="content" v-html="what"></div>

        <div class="About__video">
          <nuxt-link :to="'/'" class="About__more">More <br> about <span class="underline">us</span></nuxt-link>
          <YoutubePlayer class="About__video-player"/>
        </div>
      </section>

      <section class="Apply">
        <div class="Apply__image">
          <img src="/gallery/00.jpg">
        </div>
        <div class="Apply__container">
          <h1>Champion technology and frame the future</h1>
          <nuxt-link :to="'/apply'"><span class="underline">Apply</span></nuxt-link>
        </div>
      </section>

      <section class="Curiculum">
        <div class="Curiculum__header">
          <h1>Devising solutions with top-notch trainers</h1>
          <a href="https://github.com/HackYourFuture/curriculum" target="_blank">Check out our <span class="underline">curiculum</span></a>
        </div>
        <div class="Curiculum__image">
          <img src="/gallery/02.jpg">
        </div>
        <div class="Curiculum__content" v-html="curiculum"></div>
      </section>

      <section class="Hire">
        <h1>Help a brother out!</h1>
       <div v-html="hire"></div>
        <div class="Hire__image">
          <img src="/gallery/03.jpg">
        </div>
      </section>
    </Main>

    <Signup/>

    <section class="Chapters">

    </section>

    <section class="News">
      <News/>
    </section>

    <section class="Makers">
      <Makers/>
    </section>

    <Signup/>

    <Partners/>

    

  </div>
</template>

<script>
import axios from '~/plugins/axios'
import Colors from '~/constants/colors'

import Landscape from '~/components/index/Landscape';
import News from '~/components/news/News';
import Signup from '~/components/signup/Signup';
import Makers from '~/components/makers/Makers';
import Partners from '~/components/partners/Partners';
import YoutubePlayer from '~/components/video/YoutubePlayer';

 export default {
     async asyncData () {
         let data
         let what
         let apply
         let curiculum
         let hire
         try {
             let req  = await axios.get('/content/en/index-about.json')
             let wReq  = await axios.get('/content/en/what.json')
             let aReq  = await axios.get('/content/en/apply.json')
             let cReq  = await axios.get('/content/en/curiculum.json')
             let hReq  = await axios.get('/content/en/index-hire.json')

             what = wReq.data.body
             apply = aReq.data.body
             data = req.data.body
             curiculum = cReq.data.body
             hire = hReq.data.body
         } catch (e) {
             console.log(e)
             data = false
         }
         return {
             siteKey: "6LfsWVAUAAAAAE5mdeB0ICRoDDkWJd00vr9NEZ3I",
             about: data ? data : null,
             hire: hire ? hire : null,
             what,
             apply,
             curiculum,
             Colors
         }
     },
     components: {
       Landscape,
       News,
       Signup,
       Makers,
       Partners,
       YoutubePlayer
     }
 }
</script>

<style lang="scss">

.About {
  .content {
    width: 80%;
    margin: 0 auto;
    padding-top: $base-vertical-rithm * 10;
    h1 {
      font-size: 36px;
      color: $color-purple;
      width: 45%;
      line-height: 50px;
      margin: $base-vertical-rithm * 10 0;
    }
    p {
      width: 70%;
      margin: 0 auto;
    }
  }
  &__video {
    margin: $base-vertical-rithm * 10 0;
    &-player {
      display: inline-block;
    }
  }
  &__more {
    vertical-align: top;
    display: inline-block;
    margin: 0px $base-vertical-rithm * 5;
    margin-left: 10%;
    font-size: 36px;
    line-height: 36px;
    font-weight: 900;
  }
}

.Apply {
  margin: $base-vertical-rithm * 30 0;
  &__image {
    display: inline-block;
    width: 45%;
    margin: 0 $base-vertical-rithm * 10;
  }
  &__container {
    width: 45%;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    h1 {
      font-size: 36px;
      color: $color-purple;
      line-height: 50px;
    }
    a {
      display: block;
      font-size: 24px;
      font-weight: bold;
      margin-top: $base-vertical-rithm * 5;
      span:after {
        bottom: -5px;
      }
    }
  }
}

.Curiculum {
  margin: $base-vertical-rithm * 30 0;
  &__header {
    margin: 0 $base-vertical-rithm * 10;
    padding: $base-vertical-rithm * 2;
    background: $color-purple;
    width: 75%;
    h1 {
      margin: $base-vertical-rithm * 10;
      margin-bottom: $base-vertical-rithm * 2;
      width: 75%;
      color: white;
      font-size: 36px;
      line-height: 50px;
    }
    a {
      display: block;
      color: white;
      font-weight: bold;
      font-size: 20px;
      margin: $base-vertical-rithm * 5;
      margin-top: 0;
      margin-left: 80%;
      span:after {
        background: white;
        height: 1px;
        bottom: -2px;
      }
    }
  }
  &__image {
    margin-left: $base-vertical-rithm * 23;
    width: 30%;
    margin-top: -5%;
    display: inline-block;
    vertical-align: top;
  }
  &__content {
    display: inline-block;
    width: 50%;
    margin: $base-vertical-rithm * 5;
    font-weight: 400;
  }
}

.Hire {
  margin: $base-vertical-rithm * 10 $base-vertical-rithm * 10;
  & > div {
     width: 35%;
    margin: 0 $base-vertical-rithm * 10;
    display: inline-block;
  }
  h1 {
    font-size: 55px;
    font-weight: bold;
    color: $color-purple;
    width: 100%;
    line-height: 50px;
    margin: $base-vertical-rithm * 10 0;
  }
  &__image {
    width: 55%;
    display: inline-block;
    vertical-align: top;
  }
}
</style>

