<script lang="ts">

</script>

<header>
  <h1>Hi<span class="punctuation">!</span> I'm Matt<span class="punctuation">.</span></h1>
</header>

<style lang="scss">
@use "../../scss/typography" as t;
@use "../../scss/colors" as c;
@use "../../scss/breakpoints" as b;

header {
  height: 1.2rem;
  background: c.$dark;
}

h1 {
  color: c.$blue;
}

.punctuation {
  color: c.$pink;
}
</style>
