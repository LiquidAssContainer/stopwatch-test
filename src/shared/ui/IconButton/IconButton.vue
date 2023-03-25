<script setup>
import { Button as VButton } from '../Button';
import { ControlIcon } from '../ControlIcon';

const { label } = defineProps({
  label: String,
});
</script>

<template>
  <v-button :aria-label="label">
    <control-icon>
      <slot />
    </control-icon>
  </v-button>
</template>
