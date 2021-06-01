<script lang="ts">

</script>

<div class="venn">
  <div></div><div></div><div></div>
  <div></div><div></div><div></div>
</div>


<style lang="scss">
@use "../../scss/colors" as c;
@use "../../scss/breakpoints" as b;

// ********* Venn Diagram *************

@mixin circle($bottom: 10.02%, $left: -1.91%, $bg: c.$white, $blend: normal, $op: 1) {
  position: absolute;
  width: 60.59%;
  border-radius: 50%;
  bottom: $bottom;
  left: $left;
  background: $bg;
  mix-blend-mode: $blend;
  opacity: $op;
  @extend %after;
}

.venn {
  font-size: 0.695vw;
  position: relative;
  width: 81em;
  transform: rotate(-7deg);
  padding-top: 7em;
  margin-left: -2em;
  @extend %after;
  :nth-child(1) {
    @include circle($bottom: 37.41%, $left: 19.705%);
  }
  :nth-child(2) {
    @include circle($left: 40.5%);
  }
  :nth-child(3) {
    @include circle();
  }
  :nth-child(4) {
    @include circle($bottom: 37.41%, $left: 19.705%, $bg: c.$green, $blend: difference, $op: 0.65);
  }
  :nth-child(5) {
    @include circle($left: 40.5%, $bg: c.$red, $blend: difference, $op: 0.65);
  }
  :nth-child(6) {
    @include circle($bg: c.$cyan, $blend: difference, $op: 0.65);
  }
}

%after {
  &::after {
    content: "";
    padding-bottom: 100%;
    display: block;
  }
}

</style>
