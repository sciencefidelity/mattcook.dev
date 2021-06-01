<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">

</script>

<svelte:head>
  <title>Hi! I'm Matt</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&family=Space+Mono:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
</svelte:head>

<section class="main">
  <h2 class="main__headline">I'm a multi-media artist and digital creative<span class="main__punctuation">.</span></h2>
</section>

<style lang="scss">
@use "../scss/typography" as t;
@use "../scss/colors" as c;
@use "../scss/breakpoints" as b;

.main {
  &__headline {
    padding: 10.6rem 0 0 10.6rem;
    font-size: 4.5rem;
    transform: rotate(4.5deg);
    line-height: 0;
    font-family: t.$sans;
  }
  &__punctuation {
    color: c.$pink;
  }
}

</style>
