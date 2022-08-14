<template>
  <section id="ktApp">
    <main>
      <RouterView />
    </main>
    <FootNote></FootNote>
  </section>
</template>
<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import FootNote from "@/components/global/footNote.vue";
</script>
<style>
  html, body {
    margin: 0;
  }
  body {
    line-height: 1.5;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  figure {
    margin: 0;
  }
</style>
