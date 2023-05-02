<script setup lang="ts">
interface Emits {
  (e: 'click'): void;
}

defineEmits<Emits>();
</script>

<template>
  <button class="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
