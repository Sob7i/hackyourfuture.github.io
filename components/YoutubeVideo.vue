<template>
  <div>
    <div class="video" ref="video" />
    </div>
  </div>
</template>

<script>
 import youtube from '~/plugins/youtube'

 const videoConfig = {
   suggestedQuality: 'large',
   videoId: 'qFqHXZio6ZM',
   playerVars: {
     controls: 0,
     loop: 1,
     showinfo: 0,
     rel: 0
   }
 }

 export default {

   async mounted () {
     this.video = await this.addVideo()
   },

   methods: {

     play () {
       if (!!this.video) this.video.playVideo()
     },

     pause () {
       if (!!this.video) this.video.pauseVideo()
     },

     addVideo () {
       return youtube(this.$refs.video, Object.assign({
         events: {
           onReady: e => this.onPlayerReady(e),
           onStateChange: e => this.onPlayerStateChange(e)
         }
       }, videoConfig))
     },

     onPlayerStateChange (e) {
       if (e.data === YT.PlayerState.ENDED) {
         e.target.playVideo()
       }
     },

     onPlayerReady (e) {
       e.target.setVolume(0)
       e.target.playVideo()
       setTimeout(() => e.target.pauseVideo(), 1000)
     }
   }
 }
</script>
