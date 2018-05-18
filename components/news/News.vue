<template>
  <div class="News">
    <h1>extra extra read all about it</h1>
    <div class="News__items">
      <div class="News__item">
        <div class="News__item-image">
          <img src="/gallery/04.jpg">
        </div>
        <h3>All aboard!</h3>
        <p>We are hiring! We're looking for a program manager that's responsible for running our alumni program.</p>
        <nuxt-link :to="'/'">Read more</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

</script> 

<style lang="scss">
.News {
  margin: 5%;
  background: $color-grey;
  padding: $base-vertical-rithm;
  h1 {
    width: 25%;
    color: $color-purple;
    font-size: 36px;
    line-height: 50px;
    display: inline-block;
    vertical-align: top;
  }
  &__items {
    display: inline-block;
    width: 75%;
  }
  &__item {
    display: inline-block;
    width: 25%;
    color: $color-purple;
    a {
      font-weight: bold;
    }
    &-image {
      margin-bottom: $base-vertical-rithm * 4;
    }
  }
}
</style>
