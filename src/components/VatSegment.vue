<template>
  <ion-segment :value="20"
               @ion-change="$emit('update:vatRate', parseFloat($event.target.value))">
    <ion-segment-button :value="20">
      <ion-label>%20</ion-label>
    </ion-segment-button>
    <ion-segment-button :value="10">
      <ion-label>%10</ion-label>
    </ion-segment-button>
    <ion-segment-button :value="1">
      <ion-label>%1</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script setup lang="ts">
defineProps<{
  vatRate: number | null
}>();
defineEmits<{
  (e: 'update:vatRate', value: number | null): void;
}>();
</script>