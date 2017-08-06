<template>
  <div>
    <section class="hero is-fullheight">
      <div class="bg">
        <slot name="background">
        </slot>
      </div>
      <div class="hero-body">
        <div class="container">
          <slot name="content">
          </slot>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
 .hero {
   position: relative;
 }
 .bg {
   position: absolute;
   top: 0;
   height: 0;
   width: 100%;
   height: 100%;
 }
</style>
<script>
 export default {
 }
</script>
