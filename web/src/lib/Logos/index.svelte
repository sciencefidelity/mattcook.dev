<script lang="ts">
import javascript from "./js-square-brands.svg"
import node from "./node-js-brands.svg"
import sass from "./sass-brands.svg"
import vuejs from "./vuejs-brands.svg"
import react from "./react-brands.svg"
import angular from "./angular-brands.svg"

</script>

<div class="logos">
  <img src={javascript} alt="JavaScript" class="logos__javascript" width="131px" height="150px"/>
  <img src={node} alt="Nodejs" class="logos__node" width="131px" height="150px"/>
  <img src={sass} alt="Sass" class="logos__sass" width="188px" height="150px"/>
  <img src={vuejs} alt="Asterisk" class="logos__vuejs" width="87px" height="100px"/>
  <img src={react} alt="Asterisk" class="logos__react" width="100px" height="100px"/>
  <img src={angular} alt="Asterisk" class="logos__angular" width="131px" height="150px"/>
</div>


<style lang="scss">
@use "../../scss/colors" as c;
@use "../../scss/breakpoints" as b;

.logos {
  font-size: 0.695vw;
  position: absolute;
  top: 28.5em;
  right: 8em;
  display: flex;
  flex-direction: row;
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
