<template>
  <div>
    <Menu />
    <div class="bg-container">
      <div class="bg" :style="`background-image: url('${img}')`"></div>
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title title--page">{{ title }}</h1>
          </div>
        </div>
      </section>
    </div>
    <div class="content">
      <div v-html="content"></div>
    </div>
  </div>
</template>
<style scoped>
 .hero{
   position: absolute;
   width: 100vw;
   min-height: 70vh;
   background: transparent;
 }
 .hero-body {
   min-height: 100%;
 }
 .bg-container {
   position: absolute;
   top: 0;
   left: 0;
   overflow: hidden;
   height: 70vh;
   width: 100vw;
   z-index: -1;
 }
 .bg {
   position: absolute;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-size: cover;
   background-attachment: fixed;
   z-index: -1;
 }
 .title--page {
   display: inline-block;
   background-color: rgba(179,211,141,1);
   padding: 20px 40px;
   font-weight: bold;
   color: #fff;
   font-variant: small-caps;
   letter-spacing: 0.2em;
 }
 .content {
   text-align: center;
 }
 .content div{
   text-align: justify;
   text-justify: inter-word;
   font-size: 1.2em;
   width: 60%;
   padding: 5%;
   margin: 10% auto;
   margin-top: 50vh;
   z-index: 2;
   background: #fff;
 }
</style>
<script>
 import Menu from '~/components/Menu'

 export default {
   components: {
     Menu
   },
   props: {
     title: String,
     img: String,
     content: String
   }
 }
</script>
