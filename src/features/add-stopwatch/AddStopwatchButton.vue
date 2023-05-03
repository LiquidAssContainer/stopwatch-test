<script setup lang="ts">
import { VButton } from 'shared/ui/components/VButton';
import { CardItem } from 'shared/ui/components/CardItem';
import { ControlIcon } from 'shared/ui/components/ControlIcon';

import IconPlus from './icons/plus.svg';
</script>

<template>
  <v-button>
    <card-item class="stopwatch__add_content">
      <control-icon>
        <icon-plus />
      </control-icon>
    </card-item>
  </v-button>
</template>

<style scoped lang="scss">
$transition: 0.25s all ease-in-out;

.stopwatch__add_content {
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transition: $transition;
  }

  &:hover svg {
    fill: var(--color-typo-hover);
  }
}
</style>
