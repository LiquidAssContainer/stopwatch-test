<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const theme = ref('os');

watch(theme, () => {
  localStorage.setItem('theme', theme.value);
  document.documentElement.dataset.theme = theme.value;
});

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    theme.value = savedTheme;
  }
});
</script>

<template>
  <select v-model="theme" class="color-scheme-select">
    <option value="system">System theme</option>
    <option value="light">Light theme</option>
    <option value="dark">Dark theme</option>
  </select>
</template>

<style scoped lang="scss">
.color-scheme-select {
  background-color: var(--color-bg-primary);
  color: var(--color-typo-secondary);
  border-color: var(--color-border-select);
}
</style>
