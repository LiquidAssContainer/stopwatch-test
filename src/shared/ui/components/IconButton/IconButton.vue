<script setup lang="ts">
import { VButton } from '../VButton';
import { ControlIcon } from '../ControlIcon';

interface Props {
  label: String;
}

interface Emits {
  (e: 'click'): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <v-button :aria-label="label" @click="$emit('click')">
    <control-icon>
      <slot />
    </control-icon>
  </v-button>
</template>
