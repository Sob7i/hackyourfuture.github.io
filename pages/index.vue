<template>
  <div>

    <Hero class="hero--main">
      <div slot="background">
        <Gallery ref="anim_0" :images="images" class="gallery" />
        <Triangles ref="anim_1" :width="tw()" :height="th()" :colors="Colors.DarkScale" animate="true" class="bg main--triangles" />
        <div class="bg" style="background-color: rgba(0,0,0,0.5); box-shadow: 200px rgba(0,0,0,0.8)"></div>
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
        <div class="bg"></div>
      </div>
      <div slot="content" class="has-text-centered">
        <SmashButton v-on:click.native="playFullScreenVideo">Listen our Story</SmashButton>
      </div>
    </Hero>

    <Hero class="hero--what">
      <div slot="background">
        <div class="bg bg__img" style="background-image: url('/gallery/01.jpg');"></div>
        <div class="bg has-bg-rotate" :style="`background-color: ${Colors.Custom[0]}; transform: scaleX(-1) rotate(180deg);`"></div>
        <div class="bg"></div>
      </div>
      <div slot="content" class="content" v-html="what"></div>
    </Hero>


    <Hero class="hero--support has-text-centered">
      <div slot="background">
        <div class="bg bg__img" style="background-image: url('/gallery/05.jpg');"></div>
        <div class="bg has-bg-rotate" :style="`background-color: ${Colors.Custom[3]};`"></div>
        <div class="bg"></div>
      </div>
      <div slot="content" class="content">
        <h1>Support us</h1>
        <div class="columns">
          <div class="column">
            <h4>Sponsor</h4>
            <div style="min-height: 150px;">
            <p>
              We believe that this generation of refugees has great potential.
            </p>
            <p>
              Help us maximize their potential with your donation.
            </p>
            </div>
            <SmashButton>Donate</SmashButton>
          </div>

          <div class="column">
            <h4>Code Mentors</h4>
            <div style="min-height: 150px;">
            <p>
              We’re looking for web-developers with experience.
            </p>
            <p>
              Javascript and related frameworks, are our Mainly concern.
            </p>
            </div>
            <SmashButton>Mentoring</SmashButton>
          </div>

          <div class="column">
            <h4>Laptop</h4>
            <div style="min-height: 150px;">
            <p>
              Does your organization have laptops up for donation?
            </p>
            <p>
              Our student could really use them.
            </p>
            </div>
            <SmashButton>Donate</SmashButton>
          </div>

        </div>
      </div>
    </Hero>

    <Hero class="hero--apply">
      <div slot="background">
        <div class="bg bg__img" style="background-image: url('/gallery/02.jpg');"></div>
        <div class="bg has-bg-rotate invers" :style="`background-color: ${Colors.Custom[5]}; transform: scaleY(-1);`"></div>
        <div class="bg"></div>
      </div>
      <div slot="content" class="content" v-html="apply"></div>
    </Hero>

    <div>
      <Mentors/>
    </div>

  </div>
</template>
<style>
 @import url('https://fonts.googleapis.com/css?family=Saira');
 @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

 body {
   font-size: 1.2em;
 }

 *, button {
   font-family: 'Saira', san-serif;
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

 .hero .bg.bg__img {
   background-position: center center;
   background-repeat: no-repeat;
   background-size: cover;
 }

 .hero--main .bg {
   opacity: 0.6;
 }

 .hero--main svg {
   width: 100% !important;
   min-height: 100% !important;
 }

 .main--triangles{
   overflow: hidden;
 }

 .hero--video .bg {
   background: rgba(255,255,255,0.5);
 }

 .content {
   padding: 20px;
   background: rgba(255,255,255,0.9);
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
 .gallery.fixed {
   position: fixed;
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
 import Mentors from '~/components/Mentors'
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
     Hero,
     Mentors
   },
   async asyncData () {
     let data
     let what
     let apply
     try {
       let req  = await axios.get('/content/en/index-about.json')
       let wReq  = await axios.get('/content/en/what.json')
       let aReq  = await axios.get('/content/en/apply.json')

       what = wReq.data.body
       apply = aReq.data.body
       data = req.data.body
     } catch (e) {
       console.log(e)
       data = false
     }
     return {
       tWidth: 1500,
       tHeight: 1000,
       about: data ? data : null,
       what,
       apply,
       Colors,
       images
     }
   },
   mounted () {
     let wh = window.innerHeight
     document.addEventListener('scroll', throttle(()=> {
       let screen = Math.floor((document.body.scrollTop - 30) / wh)
       switch(screen){
           case -1:
           case 0:
           this.$refs.anim_0.$el.classList.add('fixed')
           this.$refs.anim_0.play()
           this.$refs.anim_1.play()
           this.$refs.anim_2.play()
           break;
           case 1:
           this.$refs.anim_0.$el.classList.remove('fixed')
           this.$refs.anim_0.pause()
           this.$refs.anim_1.pause()
           this.$refs.anim_2.play()
           break;

           default:
           this.$refs.anim_0.$el.classList.remove('fixed')
           this.$refs.anim_0.pause()
           this.$refs.anim_1.pause()
           this.$refs.anim_2.pause()
           break;

       }
     }, 300))
   },
   methods: {
     playFullScreenVideo () {
       this.$refs['anim_2'].playFullScreenVideo()
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
