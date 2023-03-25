<script setup>
import { formatTime } from './lib';

defineProps({
  time: Number,
});
</script>

<template>
  <div class="stopwatch__time">{{ formatTime(time) }}</div>
</template>

<style lang="sass" scoped>
.stopwatch__time
  font-size: 22px
</style>
