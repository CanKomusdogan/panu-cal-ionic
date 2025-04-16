<template>
  <ion-segment :value="selectedCurrency" @ion-change="$emit('update:selectedCurrency', $event.target.value)">
    <ion-segment-button value="USD">
      <ion-label>USD</ion-label>
    </ion-segment-button>
    <ion-segment-button value="EUR">
      <ion-label>EUR</ion-label>
    </ion-segment-button>
    <ion-segment-button value="YTL">
      <ion-label>TL</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script setup lang="ts">
defineProps<{
  selectedCurrency: string;
}>();

defineEmits<{
  (e: 'update:selectedCurrency', value: string): void;
}>();
</script>