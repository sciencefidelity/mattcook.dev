<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
import Venn from '$lib/Venn/index.svelte';
import Logos from '$lib/Logos/index.svelte';
import github from "./github-brands.svg"
</script>

<svelte:head>
  <title>Hi! I'm Matt</title>
  <meta name="description" content="I'm a multi-media artist and digital creative.">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&family=Space+Mono:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
</svelte:head>

<section class="main">
  <h2 class="main__headline">I'm a multi-media artist and digital creative<span class="main__punctuation">.</span></h2>

  <Venn/>
  <Logos/>

  <div class="main__contact">
    <a href="mailto:matt@sciencefidelity.co.uk" class="main__email">matt@sciencefidelity.co.uk</a>
  </div>

  <a href="https://github.com/sciencefidelity" target="_blank" rel="noreferrer">
    <span class="screen-reader-text">Visit me on Github</span>
    <img src={github} alt="github" class="github" width="145px" height="150px"/>
  </a>
</section>

<style lang="scss">
@use "../scss/typography" as t;
@use "../scss/colors" as c;
@use "../scss/breakpoints" as b;

.main {
  font-size: 0.695vw;
  position: relative;
  height: calc(100vh - 12em);
  overflow: hidden;
  &__headline {
    padding: 2.36em 0 0 2.36em;
    font-size: 4.5em;
    font-family: t.$sans;
    transform: rotate(4.5deg);
    line-height: 0;
  }
  &__punctuation {
    color: c.$pink;
  }
  &__contact {
    position: absolute;
    top: 49em;
    right: 11em;
    transform: rotate(4.5deg);
  }
  &__email {
    font-family: t.$mono;
    font-weight: 400;
    font-size: 2.8em;
    text-decoration: none;
    color: c.$blue;
  }
}

.github {
  font-size: 0.695vw;
  position: absolute;
  width: 4.4em;
  right: 4.5em;
  top: 58.5em;
}

// ********** accessibility **********

// text meant only for screen readers
.screen-reader-text {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  width: 1px;
  word-wrap: normal !important;
}

.screen-reader-text:focus {
  background-color: #f1f1f1;
  border-radius: 3px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
  clip: auto !important;
  clip-path: none;
  color: #21759b;
  display: block;
  font-size: 0.875rem;
  font-weight: 700;
  height: auto;
  left: 5px;
  line-height: normal;
  padding: 15px 23px 14px;
  text-decoration: none;
  top: 5px;
  width: auto;
  z-index: 100000;
}

</style>
