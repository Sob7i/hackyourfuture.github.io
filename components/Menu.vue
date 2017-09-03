<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">HackYourFuture</nuxt-link>
    </div>
    <div class="navbar-end">
      <nuxt-link class="navbar-item" to="/about">About us</nuxt-link>
      <nuxt-link class="navbar-item" to="/">Apply now</nuxt-link>
      <nuxt-link class="navbar-item" to="/about">Support us</nuxt-link>
      <nuxt-link class="navbar-item" to="/about">Contact</nuxt-link>
      <nuxt-link class="navbar-item" to="/about">Donate</nuxt-link>
    </div>
  </nav>
</template>
<style scoped>
 .navbar{
   position: fixed;
   top: 0;
   left: 0;
   z-index: 2;
   right: 0;
 }
 .logo {
   padding: 30px 0;
 }
</style>
