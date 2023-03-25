<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.wrapper
  width: 20px
  height: 20px

:slotted(svg)
  display: block
  width: 100%
  max-height: 100%
  fill: #9e9e9e
</style>
