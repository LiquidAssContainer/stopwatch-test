<template>
  <div class="icon__wrapper">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.icon__wrapper {
  width: 20px;
  height: 20px;
}

:slotted(svg) {
  display: block;
  width: 100%;
  max-height: 100%;
  fill: var(--color-typo-primary);
}
</style>
