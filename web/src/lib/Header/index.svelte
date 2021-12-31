<style lang="scss">
  @use '../../scss/typography' as t;
  @use '../../scss/colors' as c;
  @use '../../scss/breakpoints' as b;

  .header {
    position: relative;
    height: 12em;
    font-size: 0.695vw;
    background: c.$dark;
    &__title {
      position: absolute;
      padding: 0 0 0 0.53em;
      font-family: t.$mono;
      font-size: 9.6em;
      font-style: italic;
      font-weight: 700;
      line-height: 0;
      color: c.$blue;
      transform: translateY(-0.5rem) rotate(-4.5deg);
    }
    &__punctuation {
      color: c.$pink;
    }
    &__asterisk {
      position: absolute;
      top: -3.8em;
      right: -1em;
      width: 29.5em;
      color: c.$pink;
      // height: 29.5em;
      transform: rotate(-11.8deg);
    }
  }
</style>

<script lang="ts">
  import asterisk from "./asterisk-solid.svg"
</script>

<header class="header">
  <h1 class="header__title">
    Hi<span class="header__punctuation">!</span>
    I'm Matt<span class="header__punctuation">.</span>
  </h1>
  <img src={asterisk} alt="Asterisk" class="header__asterisk" />
</header>
