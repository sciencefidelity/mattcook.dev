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

<style lang="scss">
  @use '../../styles/foundation/typography' as t;
  @use '../../styles/foundation/breakpoints' as b;

  .header {
    position: relative;
    height: 12em;
    font-size: 0.695vw;
    background: var(--dark);
    &__title {
      position: absolute;
      padding: 0.67em 0 0 0.51em;
      font-family: t.$mono;
      font-size: 9.6em;
      font-style: italic;
      font-weight: 700;
      line-height: 0;
      color: var(--blue);
      transform: translateY(-0.5rem) rotate(-4.5deg);
    }
    &__punctuation {
      color: var(--pink);
    }
    &__asterisk {
      position: absolute;
      top: -3.8em;
      right: -1em;
      width: 29.5em;
      color: var(--pink);
      transform: rotate(-11.8deg);
    }
  }
</style>
