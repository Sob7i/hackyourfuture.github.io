<template>
  <div>
    <Page v-bind:content="content" v-bind:img="`/gallery/00.jpg`" title="About us"/>
    <div>
      <Mentors/>
    </div>
  </div>
</template>
<script>
 import Mentors from '~/components/Mentors'
 import axios from '~/plugins/axios'
 import Page from '~/components/Page'

 export default {
   components: {
     Page,
     Mentors
   },
   async asyncData () {
     let req  = await axios.get('/content/en/about.json')
     return {
       content: req.data.body
     }
   }
 }
</script>
