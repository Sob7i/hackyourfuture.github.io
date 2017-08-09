<template>
  <div>
      <div v-for="img in items" v-bind:class="{active: img.active, card: true}" :style="`background-image: url(${img.url});`" />
  </div>
</template>

<style scoped>
 div {
   width: 100%;
   height: 100%;
   position: relative;
 }

 .card {
   position: absolute;
   display: block;
   list-style: none;
   opacity: 0;
   min-height: 100%;
   height: auto;
   background: no-repeat 50% 50%;
   background-size: cover;
   transition: all 3s ease-in-out;
 }

 @media (min-width: 768px) {
   background-attachment: fixed;
 }

 .card.active {
   opacity: 1;
 }
</style>

<script>
 import anim from '~/functions/anim'

 export default {
   props: {
     anim: { default: true },
     interval: { default: (10 * 1000) },
     startAt: { default: 0 },
     images: { default: () => [] }
   },
   data () {
     let current = this.startAt || 0
     return  {
       current,
       height: 0,
       items: this.images.map((url, i) => {
         return { active: i === current, url }
       })
     }
   },
   mounted () {
     if (this.anim) this.play()
   },
   methods: {
     play () {
       if (!this.tick) this.tick = new anim(this.next, this.interval)
     },
     pause () {
       if (!!this.tick) this.tick.pause()
       this.tick = null
     },
     beforeDestroy () {
       this.pause()
     },
     next () {
       this.current = this.current + 1 === this.items.length ? 0 : this.current + 1

       this.items = this.items.map((item, i) => {
         item.active = i === this.current
         return item
       })
     }
   }
 }
</script>
