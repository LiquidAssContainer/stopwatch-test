<script setup>
import { Card } from 'shared/ui/Card';
import { Button } from 'shared/ui/Button';
import { ControlIcon } from 'shared/ui/ControlIcon';

import { IconAdd } from './icons';
</script>

<template>
  <Button>
    <Card class="stopwatch__add_content">
      <ControlIcon>
        <IconAdd />
      </ControlIcon>
    </Card>
  </Button>
</template>

<style lang="sass">
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
