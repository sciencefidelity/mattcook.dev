<script lang="ts">
import javascript from "./js-square-brands.svg"
import node from "./node-js-brands.svg"
import sass from "./sass-brands.svg"
import vuejs from "./vuejs-brands.svg"
import react from "./react-brands.svg"
import angular from "./angular-brands.svg"

</script>

<div class="logos">
  <img src={javascript} alt="JavaScript" class="logos__javascript"/>
  <img src={node} alt="Nodejs" class="logos__node"/>
  <img src={sass} alt="Sass" class="logos__sass"/>
  <img src={vuejs} alt="Asterisk" class="logos__vuejs"/>
  <img src={react} alt="Asterisk" class="logos__react"/>
  <img src={angular} alt="Asterisk" class="logos__angular"/>
</div>


<style lang="scss">
@use "../../scss/colors" as c;
@use "../../scss/breakpoints" as b;

.logos {
  position: absolute;
  top: 42%;
  right: 8rem;
  display: flex;
  flex-direction: row;
  transform: rotate(4.5deg);
  &__javascript {
    width: 8.7rem;
    margin-right: 3.5rem;
  }
  &__node {
    width: 8.7rem;
    margin-right: 3rem;
  }
  &__sass {
    width: 12.4rem;
  }
  &__vuejs {
    width: 8.7rem;
    margin-right: 1.5rem;
  }
  &__react {
    width: 10rem;
    margin-right: 2rem;
  }
  &__angular {
    width: 8.5rem;
  }
}

</style>
