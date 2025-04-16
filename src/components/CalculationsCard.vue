<template>
  <ion-card v-if="calculation">
    <ion-card-content class="ion-text-center">
      <div v-if="calculation.selectedCurrencyResult !== null">
        <ion-text class="ion-">KDV'siz</ion-text>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-label>{{ '₺' }} {{ calculation.selectedCurrencyResult }}</ion-label>
            </ion-col>
            <ion-col v-if="calculation.originalCurrencyResult">
              <ion-label>{{ currencySymbol }} {{ calculation.originalCurrencyResult }}</ion-label>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <div v-if="calculation.selectedCurrencyResultVat !== null">
        <ion-text>KDV'li</ion-text>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-label>{{ '₺' }} {{ calculation.selectedCurrencyResultVat }}</ion-label>
            </ion-col>
            <ion-col v-if="calculation.originalCurrencyResultVat">
              <ion-label>{{ currencySymbol }} {{ calculation.originalCurrencyResultVat }}</ion-label>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import Calculation from '@/types/Calculation';
import { computed } from 'vue';
import { currencySymbols } from '@/constants/currency';

const props = defineProps<{
  calculation: Calculation | null
}>();

const currencySymbol = computed(() =>
  props.calculation?.currency
    ? currencySymbols[props.calculation.currency] || props.calculation.currency
    : ''
);
</script>