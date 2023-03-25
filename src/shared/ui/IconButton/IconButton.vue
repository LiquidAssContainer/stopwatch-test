<script setup>
import { Button } from '../Button';
import { ControlIcon } from '../ControlIcon';

const { label } = defineProps({
  label: String,
});
</script>

<template>
  <Button :aria-label="label">
    <ControlIcon>
      <slot />
    </ControlIcon>
  </Button>
</template>
