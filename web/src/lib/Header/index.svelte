<script lang="ts">
import asterisk from "./asterisk-solid.svg"
</script>

<header class="header">
  <h1 class="header__title">
    Hi<span class="header__punctuation">!</span>
    I'm Matt<span class="header__punctuation">.</span>
  </h1>
  <img src={asterisk} alt="Asterisk" class="header__asterisk"/>
</header>

<style lang="scss">
@use "../../scss/typography" as t;
@use "../../scss/colors" as c;
@use "../../scss/breakpoints" as b;

.header {
  background: c.$dark;
  position: relative;
  height: 12rem;
  &__title {
    position: absolute;
    font-family: t.$mono;
    font-weight: 700;
    font-style: italic;
    font-size: 9.6rem;
    line-height: 0;
    color: c.$blue;
    padding: 0 0 0 5rem;
    transform: translateY(-0.5rem) rotate(-4.5deg);
  }
  &__punctuation {
    color: c.$pink;
  }
  &__asterisk {
    position: absolute;
    top: -3.8rem;
    right: -1rem;
    color: c.$pink;
    width: 29.5rem;
    transform: rotate(-11.8deg)
  }
}

</style>
