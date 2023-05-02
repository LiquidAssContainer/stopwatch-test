<script setup lang="ts">
import { reactive, onBeforeUnmount } from 'vue';

import { StopwatchItem } from 'widgets/stopwatch';

import { AddStopwatchButton } from 'features/add-stopwatch';

import { Stopwatch } from 'entities/stopwatch/model';

const stopwatches: Stopwatch[] = reactive([]);

const onAdd = () => {
  stopwatches.push(new Stopwatch());
};

const onTogglePause = (stopwatchId: string, value: boolean) => {
  const stopwatch = stopwatches.find(({ id }) => stopwatchId === id);
  if (!stopwatch) return;

  stopwatch.togglePause(value);
};

const onRemove = (stopwatchId: string) => {
  const index = stopwatches.findIndex(({ id }) => stopwatchId === id);
  if (index !== -1) {
    stopwatches.splice(index, 1);
  }
};

const onStop = (stopwatchId: string) => {
  const stopwatch = stopwatches.find(({ id }) => stopwatchId === id);
  if (!stopwatch) return;

  stopwatch.stop();
};

const interval = setInterval(() => {
  for (const stopwatch of stopwatches) {
    stopwatch.recalculate();
  }
}, 20);

onBeforeUnmount(() => clearInterval(interval));
</script>

<template>
  <main class="main">
    <ul class="list">
      <li v-for="stopwatch in stopwatches" :key="stopwatch.id">
        <stopwatch-item
          v-bind="stopwatch"
          @stop="onStop"
          @remove="onRemove"
          @toggle-pause="onTogglePause"
        />
      </li>
      <add-stopwatch-button @click="onAdd" />
    </ul>
  </main>
</template>

<style scoped lang="scss">
$card-width: min(225px, 100%);

@mixin grid-cols($amount, $width: $card-width) {
  grid-template-columns: repeat($amount, $width);
}

.main {
  padding: 72px 10px;
}

.list {
  display: grid;
  justify-content: center;
  gap: 45px 50px;

  @media (width >= 1024px) {
    @include grid-cols(3);
  }

  @media (width >= 768px) and (width <= 1023px) {
    @include grid-cols(2);
  }

  @media (width <= 767px) {
    @include grid-cols(1);
  }
}
</style>
