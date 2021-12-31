<style lang="scss">
  @use "../scss/typography" as t;
  @use "../scss/colors" as c;
  @use "../scss/breakpoints" as b;

  .main {
    position: relative;
    height: calc(100vh - 12em);
    overflow: hidden;
    font-size: 0.695vw;
    &__headline {
      padding: 2.36em 0 0 2.36em;
      font-family: t.$sans;
      font-size: 4.5em;
      line-height: 0;
      transform: rotate(4.5deg);
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
      font-size: 2.8em;
      font-weight: 400;
      color: c.$blue;
      text-decoration: none;
    }
  }

  .github {
    position: absolute;
    top: 58.5em;
    right: 4.5em;
    width: 4.4em;
    font-size: 0.695vw;
  }

  // ********** accessibility **********

  // text meant only for screen readers

  .screen-reader-text {
    position: absolute !important;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    word-wrap: normal !important;
    border: 0;
  }

  .screen-reader-text:focus {
    top: 5px;
    left: 5px;
    z-index: 100000;
    display: block;
    width: auto;
    height: auto;
    padding: 15px 23px 14px;
    clip: auto !important;
    clip-path: none;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: normal;
    color: #21759b;
    text-decoration: none;
    background-color: #f1f1f1;
    border-radius: 3px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 60%);
  }
</style>

<script context="module" lang="ts">
  export const prerender = true
</script>

<script lang="ts">
  import Venn from "$lib/Venn/index.svelte"
  import Logos from "$lib/Logos/index.svelte"
  import github from "./github-brands.svg"
</script>

<svelte:head>
  <title>Hi! I'm Matt</title>
  <meta
    name="description"
    content="I'm a multi-media artist and digital creative."
  />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&family=Space+Mono:ital,wght@0,400;1,700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<section class="main">
  <h2 class="main__headline">
    I'm a multi-media artist and digital creative<span class="main__punctuation"
      >.</span
    >
  </h2>

  <Venn />
  <Logos />

  <div class="main__contact">
    <a href="mailto:matt@sciencefidelity.co.uk" class="main__email"
      >matt@sciencefidelity.co.uk</a
    >
  </div>

  <a href="https://github.com/sciencefidelity" target="_blank" rel="noreferrer">
    <span class="screen-reader-text">Visit me on Github</span>
    <img src={github} alt="github" class="github" />
  </a>
</section>
