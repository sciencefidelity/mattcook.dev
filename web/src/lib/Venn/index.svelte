<script lang="ts">

</script>

<div class="venn">
  <div></div><div></div><div></div>
  <div></div><div></div><div></div>
</div>


<style lang="scss">
@use "../../scss/typography" as t;
@use "../../scss/colors" as c;
@use "../../scss/breakpoints" as b;

// ********* Venn Diagram *************

@mixin circle($bottom: 10.02%, $left: 2.41%, $bg: c.$white, $blend: normal, $op: 1) {
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

@mixin content($top: 67%, $left: 50%) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: var(--light);
  top: $top;
  left: $left;
}

.venn {
  position: relative;
  width: 90vh;
  max-width: 88vw;
  @extend %after;
  :nth-child(1) {
    @include circle($bottom: 39.41%, $left: 19.705%);
  }
  :nth-child(2) {
    @include circle($left: 37%);
  }
  :nth-child(3) {
    @include circle();
  }
  :nth-child(4) {
    @include circle($bottom: 39.41%, $left: 19.705%, $bg: c.$green, $blend: difference, $op: 0.65);
  }
  :nth-child(5) {
    @include circle($left: 37%, $bg: c.$red, $blend: difference, $op: 0.65);
  }
  :nth-child(6) {
    @include circle($bg: c.$cyan, $blend: difference, $op: 0.65);
  }
  // Labels
  :nth-child(7) {
    @include content($top: 18%, $left: 50%);
  }
  :nth-child(8) {
    @include content($left: 21%);
  }
  :nth-child(9) {
    @include content($left: 78%);
  }
  :nth-child(10) {
    @include content($top: 50%);
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
