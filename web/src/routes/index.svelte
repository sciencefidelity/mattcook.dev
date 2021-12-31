<script context="module">
  import { browser, dev } from "$app/env"
  export const hydrate = dev
  export const router = browser
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

<style lang="scss">
  @use '../styles/foundation/typography' as t;

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
      color: var(--pink);
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
      color: var(--blue);
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
</style>
