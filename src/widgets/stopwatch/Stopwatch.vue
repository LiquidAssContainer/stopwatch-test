<script setup>
import { StopwatchTime } from 'entities/stopwatch-time';
import { Card, CardSection } from 'shared/ui/Card';
import { IconButton } from 'shared/ui/IconButton';

import { IconContinue, IconPause, IconStop } from './icons';

const { stopwatch, onRemove, onTogglePause } = defineProps({
  stopwatch: Object,
  onRemove: Function,
  onTogglePause: Function,
});

const handleTogglePause = () =>
  onTogglePause(stopwatch.id, !stopwatch.isPaused);

const handleRemove = () => onRemove(stopwatch.id);
</script>

<template>
  <Card>
    <CardSection>
      <StopwatchTime :time="stopwatch.time" />
    </CardSection>

    <CardSection>
      <div class="controls">
        <IconButton
          v-if="stopwatch.isPaused"
          @click="handleTogglePause"
          label="Возобновить таймер"
        >
          <IconContinue />
        </IconButton>

        <IconButton
          v-else
          @click="handleTogglePause"
          label="Поставить таймер на паузу"
        >
          <IconPause />
        </IconButton>

        <IconButton @click="handleRemove" label="Остановить таймер">
          <IconStop />
        </IconButton>
      </div>
    </CardSection>
  </Card>
</template>

<style lang="sass" scoped>
$hover-color: #fff
$transition: 0.25s all ease-in-out

.card, .card svg, .card__section, .stopwatch__time
  transition: $transition

.card:hover
  color: $hover-color

  svg
    fill: $hover-color

  .card__section
    border-color: $hover-color

  .stopwatch__time
    color: $hover-color

.controls
  display: flex
  gap: 48px
</style>
