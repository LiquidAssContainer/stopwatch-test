<script setup>
import { StopwatchTime } from 'entities/stopwatch-time';
import { Card, CardSection } from 'shared/ui/Card';
import { IconButton } from 'shared/ui/IconButton';

import { IconContinue, IconPause, IconStop, IconRemove } from './icons';

const { stopwatch, onStop, onRemove, onTogglePause } = defineProps({
  stopwatch: Object,
  onStop: Function,
  onRemove: Function,
  onTogglePause: Function,
});

const handleTogglePause = () =>
  onTogglePause(stopwatch.id, !stopwatch.isPaused);

const handleRemove = () => onRemove(stopwatch.id);

const handleStop = () => onStop(stopwatch.id);
</script>

<template>
  <card :class="{ active: !stopwatch.isPaused }">
    <card-section>
      <stopwatch-time :time="stopwatch.time" />
      <icon-button class="remove-button" @click="handleRemove">
        <icon-remove />
      </icon-button>
    </card-section>

    <card-section>
      <div class="controls">
        <icon-button
          v-if="stopwatch.isPaused"
          @click="handleTogglePause"
          label="Возобновить таймер"
        >
          <icon-continue />
        </icon-button>

        <icon-button
          v-else
          @click="handleTogglePause"
          label="Поставить таймер на паузу"
        >
          <icon-pause />
        </icon-button>

        <icon-button @click="handleStop" label="Остановить таймер">
          <icon-stop />
        </icon-button>
      </div>
    </card-section>
  </card>
</template>

<style lang="sass" scoped>
$hover-color: #fff
$transition: 0.25s all ease-in-out

.card, .card svg, .card__section, .stopwatch__time, .remove-button
  transition: $transition

.card__section
  position: relative

.remove-button
  position: absolute
  top: 8px
  right: 8px

  opacity: 0

  :deep(.icon__wrapper)
    width: 14px
    height: 14px

.card:hover .remove-button
  opacity: 1

.card:hover, .card.active
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
