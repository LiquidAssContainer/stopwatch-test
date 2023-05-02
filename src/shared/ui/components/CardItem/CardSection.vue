<template>
  <div class="card__section">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card__section {
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(n + 2) {
    border-top: 1px solid $color-typo-primary;
  }
}
</style>
