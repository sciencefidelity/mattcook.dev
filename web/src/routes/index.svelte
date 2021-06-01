<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
import Venn from '$lib/Venn/index.svelte';
import github from "../svg/github-brands.svg"
</script>

<svelte:head>
  <title>Hi! I'm Matt</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&family=Space+Mono:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
</svelte:head>

<section class="main">
  <h2 class="main__headline">I'm a multi-media artist and digital creative<span class="main__punctuation">.</span></h2>

  <Venn/>

  <a href="https://github.com/sciencefidelity" target="_blank" >
    <span class="screen-reader-text">Visit me on Github</span>
    <img src={github} alt="github" class="github"/>
  </a>
</section>

<style lang="scss">
@use "../scss/typography" as t;
@use "../scss/colors" as c;
@use "../scss/breakpoints" as b;

.main {
  position: relative;
  height: calc(100vh - 12rem);
  &__headline {
    padding: 10.6rem 0 0 10.6rem;
    font-size: 4.5rem;
    font-family: t.$sans;
    transform: rotate(4.5deg);
    line-height: 0;
  }
  &__punctuation {
    color: c.$pink;
  }
}

.github {
  position: absolute;
  width: 4.4rem;
  right: 4.5rem;
  bottom: 5rem;
}

</style>
