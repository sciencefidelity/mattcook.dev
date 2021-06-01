<script lang="ts">
import asterisk from "./asterisk-solid.svg"
</script>

<header class="header">
  <h1 class="header__title">
    Hi<span class="header__punctuation">!</span>
    I'm Matt<span class="header__punctuation">.</span>
  </h1>
  <img src={asterisk} alt="Asterisk" class="header__asterisk" width="150px" height="150px"/>
</header>

<style lang="scss">
@use "../../scss/typography" as t;
@use "../../scss/colors" as c;
@use "../../scss/breakpoints" as b;

.header {
  font-size: 0.695vw;
  background: c.$dark;
  position: relative;
  height: 12em;
  &__title {
    position: absolute;
    font-family: t.$mono;
    font-size: 9.6em;
    font-weight: 700;
    font-style: italic;
    line-height: 0;
    color: c.$blue;
    padding: 0 0 0 0.53em;
    transform: translateY(-0.5rem) rotate(-4.5deg);
  }
  &__punctuation {
    color: c.$pink;
  }
  &__asterisk {
    position: absolute;
    top: -3.8em;
    right: -1em;
    color: c.$pink;
    width: 29.5em;
    transform: rotate(-11.8deg)
  }
}

</style>
