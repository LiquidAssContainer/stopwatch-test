<script setup lang="ts">
import { StopwatchTime } from 'entities/stopwatch-time';

import { CardItem, CardSection } from 'shared/ui/components/CardItem';
import { IconButton } from 'shared/ui/components/IconButton';

import { IconContinue, IconPause, IconStop, IconRemove } from './icons';

interface Props {
  id: string;
  time: number;
  isPaused: boolean;
}

interface Emits {
  (e: 'stop', id: string): void;
  (e: 'remove', id: string): void;
  (e: 'toggle-pause', id: string, value: boolean): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <card-item :class="{ active: !isPaused }">
    <card-section>
      <stopwatch-time :time="time" />
      <icon-button
        class="remove-button"
        label="Удалить таймер"
        @click="$emit('remove', id)"
      >
        <icon-remove />
      </icon-button>
    </card-section>

    <card-section>
      <div class="controls">
        <icon-button
          :label="isPaused ? 'Возобновить таймер' : 'Поставить таймер на паузу'"
          @click="$emit('toggle-pause', id, !isPaused)"
        >
          <icon-continue v-if="isPaused" />
          <icon-pause v-else />
        </icon-button>

        <icon-button label="Остановить таймер" @click="$emit('stop', id)">
          <icon-stop />
        </icon-button>
      </div>
    </card-section>
  </card-item>
</template>

<style scoped lang="scss">
$hover-color: #fff;
$transition: 0.25s all ease-in-out;

.card-item,
.card-item svg,
.card__section,
.stopwatch-time,
.remove-button {
  transition: $transition;
}

.card__section {
  position: relative;
}

.remove-button {
  position: absolute;
  top: 8px;
  right: 8px;
  opacity: 0;

  :deep(.icon__wrapper) {
    width: 14px;
    height: 14px;
  }
}

.card-item:hover .remove-button {
  opacity: 1;
}

.card-item:hover,
.card-item.active {
  color: $hover-color;

  svg {
    fill: $hover-color;
  }

  .card__section {
    border-color: $hover-color;
  }

  .stopwatch-time {
    color: $hover-color;
  }
}

.controls {
  display: flex;
  gap: 48px;
}
</style>
