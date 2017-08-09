<template>
  <a class="SmashButton">
    <slot>Button Text</slot>
  </a>
</template>

<style scoped>
 .SmashButton {
   font-weight: bold;
   text-transform: uppercase;
   letter-spacing: 0.8em;
   padding: 1em 1.5em;
   border: 2px solid #000;
   color: #000;
   overflow: hidden;
   position: relative;
   display: inline-block;
   transition: all 1s ease;
   z-index: 1;
 }

 .SmashButton:before {
   content: "";
   position: absolute;
   height: 0%;
   left: 50%;
   top: 50%;
   width: 150%;
   z-index: -1;
   transition: all 0.75s ease 0s;
   transform: translateX(-50%) translateY(-50%) rotate(-25deg);
 }

 .SmashButton:hover {
   color: #fff;
 }

 .SmashButton:hover:before {
   height: 450%;
   background: #000;
 }
</style>
