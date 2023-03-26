<script setup>
import { Card } from 'shared/ui/Card';
import { Button as VButton } from 'shared/ui/Button';
import { ControlIcon } from 'shared/ui/ControlIcon';

import { IconAdd } from './icons';
</script>

<template>
  <v-button>
    <card class="stopwatch__add_content">
      <control-icon>
        <icon-add />
      </control-icon>
    </card>
  </v-button>
</template>

<style lang="sass" scoped>
$hover-color: #fff
$transition: 0.25s all ease-in-out

.stopwatch__add_content
  display: flex
  justify-content: center
  align-items: center

  svg
    transition: $transition

  &:hover svg
    fill: $hover-color
</style>
