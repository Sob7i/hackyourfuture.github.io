<template>
  <div>
    <Page v-bind:content="content" v-bind:img="`/gallery/00.jpg`" title="About us"/>
  </div>
</template>
<script>
 import axios from '~/plugins/axios'
 import Page from '~/components/Page'

 export default {
   components: {
     Page
   },
   async asyncData () {
     let req  = await axios.get('/content/en/about.json')
     return {
       content: req.data.body
     }
   }
 }
</script>
