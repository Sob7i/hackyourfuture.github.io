<template>
  <header class="Header">
    <div class="container max-width">
      <HeaderNav/>
      <nuxt-link class="donate-btn" :to="'/donate'">Donate</nuxt-link>
    </div>
  </header>
</template>

<script>
import HeaderNav from './HeaderNav'
export default {
  components: {
    HeaderNav
  }
}
</script>

<style lang="scss">
.Header {
  position: fixed;
  width: 100%;
  background: white;
  z-index: 10;
  top: 0;
  .HeaderNav {
    margin: $base-vertical-rithm * 2;
    text-align: center;
  }
  .donate-btn {
    border: 2px solid $color-purple;
    padding: 0px 10px;
    text-transform: uppercase;
    font-weight: 100;
    position: absolute;
    top: 2px;
    right: 0;
    margin: $base-vertical-rithm * 1 $base-vertical-rithm * 5;
  }
}
</style>
