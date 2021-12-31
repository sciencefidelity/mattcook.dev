<style lang="scss">
  @use '../../styles/foundation/breakpoints' as b;

  @mixin circle(
    $bottom: 10.02%,
    $left: -1.91%,
    $bg: var(--grey-000),
    $blend: normal,
    $op: 1
  ) {
    @extend %after;

    position: absolute;
    bottom: $bottom;
    left: $left;
    width: 60.59%;
    background: $bg;
    border-radius: 50%;
    mix-blend-mode: $blend;
    opacity: $op;
  }

  .venn {
    @extend %after;

    position: relative;
    width: 81em;
    padding-top: 7em;
    margin-left: -2em;
    font-size: 0.695vw;
    transform: rotate(-7deg);
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
      @include circle(
        $bottom: 37.41%,
        $left: 19.705%,
        $bg: var(--green),
        $blend: difference,
        $op: 0.65
      );
    }
    :nth-child(5) {
      @include circle($left: 40.5%, $bg: var(--red), $blend: difference, $op: 0.65);
    }
    :nth-child(6) {
      @include circle($bg: var(--cyan), $blend: difference, $op: 0.65);
    }
  }

  %after {
    &::after {
      display: block;
      padding-bottom: 100%;
      content: '';
    }
  }
</style>

<script lang="ts">
</script>

<div class="venn">
  <div />
  <div />
  <div />
  <div />
  <div />
  <div />
</div>
