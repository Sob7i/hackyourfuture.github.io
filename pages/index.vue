<template>
  <div>

    <Hero class="hero--main">
      <div slot="background">
        <Gallery ref="anim_0" :images="images" class="gallery" />
        <Triangles ref="anim_1" :width="tw()" :height="th()" class="bg" />
      </div>
      <div slot="content">
        <img alt="HackYourFuture" src="/logo.svg" class="logo"/>
        <div class="about" v-html="about"></div>
        <div class="has-text-centered">
          <MainActions />
        </div>
      </div>
    </Hero>

    <Hero class="hero--video">
      <div slot="background">
        <YoutubeVideo ref="anim_2" />
      </div>
      <div slot="content" class="has-text-centered">
        <SmashButton>Listen our Story</SmashButton>
      </div>
    </Hero>

    <Hero class="hero--support">
      <div slot="background">
        <img alt="" src="/gallery/05.jpg"/>
        <div class="bg has-bg-rotate" :style="`background-color: ${Colors.Custom[3]};`"></div>
        <div class="bg"></div>
      </div>
      <div slot="content">
        <h1 class="title">Support us</h1>
      </div>
    </Hero>

    <Hero class="hero--apply">
      <div slot="background">
        <div class="bg has-bg-rotate invers" :style="`background-color: ${Colors.Custom[5]};`"></div>
        <img alt="" src="/gallery/02.jpg"/>
        <div class="bg"></div>
      </div>
      <div slot="content">
        <h1 class="title">Apply</h1>
      </div>
    </Hero>

  </div>
</template>
<style>
 @import url('https://fonts.googleapis.com/css?family=Oxygen');
 @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

 body {
   font-size: 1.2em;
 }

 *, button {
   font-family: 'Oxygen', san-serif;
   line-height: 1.2em;
 }

 iframe {
   position: absolute;
   top: 0;
   height: 0;
   width: 100%;
   height: 100%;
 }

 .about p{
   font-size: 2.6vw;
   background: #fff;
   display: inline;
   padding: 2px 10px;
   line-height: 1.8em;
 }

 @media (max-width: 900px){
   .about p {
     font-size: 4vw;
   }
 }

 @media (max-width: 480px){
   .about p {
     font-size: 5vw;
   }
 }
</style>
<style scoped>
 .logo {
   background: #fff;
   margin: 0.5em 0;
   padding: 0.9em 10px;
   width: 400px;
 }

 .hero .bg {
   background: rgba(255,255,255,0.6);
 }

 .hero--main .bg {
   opacity: 0.6;
 }

 .hero--video .bg {
   background: rgba(255,255,255,0.5);
 }

 .hero--support, .hero--apply {
   overflow: hidden;
 }

 .hero--support .container, .hero--apply .container {
   color: #fff;
 }

 .has-bg-rotate {
   width: 500%;
   height: 500%;
   opacity: 0.7;
   position: absolute;
   bottom: 0;
   left: 0;
   -webkit-clip-path: polygon(0 0, 0 100%, 100% 0, 100% 0);
 }

 .has-bg-rotate.inverse {
   transform: translateX(0) translateY(-50%) rotate(25deg);
 }

 .gallery {
   position: absolute;
 }
</style>

<script>
 import axios from '~/plugins/axios'
 import scrollmonitor from 'scrollmonitor'
 import Triangles from '~/components/svg/Triangles'
 import Gallery from '~/components/Gallery'
 import YoutubeVideo from '~/components/YoutubeVideo'
 import SmashButton from '~/components/SmashButton'
 import MainActions from '~/components/MainActions'
 import Hero from '~/components/Hero'
 import Colors from '~/constants/colors'

 import throttle from '~/functions/throttle'

 const images = [...Array(6)].map((i, k) => `/gallery/0${k}.jpg`)

 export default {
   components: {
     Triangles,
     Gallery,
     YoutubeVideo,
     SmashButton,
     MainActions,
     Hero
   },
   async data () {
     let data
     try {
       let req  = await axios.get('/content/en/index-about.json')
       data = req.data.body
     } catch (e) {
       console.log(e)
       data = false
     }
     return {
       about: data
     }
   },
   async asyncData () {
     let data
     try {
       let req  = await axios.get('/content/en/index-about.json')
       data = req.data.body
     } catch (e) {
       console.log(e)
       data = false
     }
     return {
       tWidth: 1400,
       tHeight: 1000,
       about: data ? data : null,
       Colors,
       images
     }
   },
   mounted () {
     this.bindScrollmonitorsWatchers()
   },
   methods: {

     bindScrollmonitorsWatchers () {
       let containerMonitor = scrollmonitor.createContainer(document.body)

       for(let k in this.$refs){
         let ref = this.$refs[k]
         let margin = window.innerHeight / 2
         let monitor = containerMonitor.create(ref.$el, {top: margin * -1})
         monitor.enterViewport(this.play.bind(this, ref))
         monitor.partiallyExitViewport(this.pause.bind(this, ref))
       }
     },

     play ( ref ) {
       ref.play()
     },

     pause ( ref ) {
       ref.pause()
     },

     tw () {
       return !typeof window === 'undefined' ? window.innerWidth : this.tWidth
     },
     th () {
       return !typeof window === 'undefined' ? window.innerHeight : this.tHeight
     }
   }
 }
</script>
