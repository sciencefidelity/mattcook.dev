<style lang="scss">
  @use '../../scss/colors' as c;
  @use '../../scss/breakpoints' as b;

  .logos {
    position: absolute;
    top: 27.5em;
    right: 8em;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.695vw;
    transform: rotate(4.5deg);
    &__javascript {
      width: 8.7em;
      margin-right: 3.5em;
    }
    &__node {
      width: 8.7em;
      margin-right: 3em;
    }
    &__sass {
      width: 12.4em;
    }
    &__vuejs {
      width: 8.7em;
      margin-right: 1.5em;
    }
    &__react {
      width: 10em;
      margin-right: 2em;
    }
    &__angular {
      width: 8.5em;
    }
  }
</style>

<script lang="ts">
  import javascript from "./js-square-brands.svg"
  import node from "./node-js-brands.svg"
  import sass from "./sass-brands.svg"
  import vuejs from "./vuejs-brands.svg"
  import react from "./react-brands.svg"
  import angular from "./angular-brands.svg"
</script>

<div class="logos">
  <img src={javascript} alt="JavaScript" class="logos__javascript" />
  <img src={node} alt="Nodejs" class="logos__node" />
  <img src={sass} alt="Sass" class="logos__sass" />
  <img src={vuejs} alt="Asterisk" class="logos__vuejs" />
  <img src={react} alt="Asterisk" class="logos__react" />
  <img src={angular} alt="Asterisk" class="logos__angular" />
</div>
