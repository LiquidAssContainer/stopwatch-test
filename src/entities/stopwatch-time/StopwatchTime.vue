<script setup lang="ts">
import { formatTime } from './lib';

interface Props {
  time: number;
}

defineProps<Props>();
</script>

<template>
  <div class="stopwatch-time">
    {{ formatTime(time) }}
  </div>
</template>

<style scoped lang="scss">
.stopwatch-time {
  font-size: 2.2rem;
  color: $color-typo-primary;
}
</style>
