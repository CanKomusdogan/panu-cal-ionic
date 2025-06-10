<template>
  <ion-card v-if="calculation">
    <ion-card-content class="ion-text-center">
      <div v-if="calculation.selectedCurrencyResult !== null">
        <ion-text>{{ t('withoutVatCalculationTitle') }}</ion-text>
        <ion-grid>
          <ion-row>
            <ion-col v-if="calculation.originalCurrencyResult">
              <ion-label>{{ fromCurrencySymbol }} {{ formatCurrency_(calculation.originalCurrencyResult) }}</ion-label>
            </ion-col>
            <ion-col>
              <ion-label>{{ toCurrencySymbol }} {{ formatCurrency_(calculation.selectedCurrencyResult) }}</ion-label>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <div v-if="calculation.selectedCurrencyResultVat !== null">
        <ion-text>{{ t('withVatCalculationTitle') }}</ion-text>
        <ion-grid>
          <ion-row>
            <ion-col v-if="calculation.originalCurrencyResultVat">
              <ion-label>{{ fromCurrencySymbol }} {{ formatCurrency_(calculation.originalCurrencyResultVat) }}
              </ion-label>
            </ion-col>
            <ion-col>
              <ion-label>{{ toCurrencySymbol }} {{ formatCurrency_(calculation.selectedCurrencyResultVat) }}</ion-label>
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
import { useCurrencyFormatter } from '@/composables/useCurrencyFormatter';
import { useI18n } from 'vue-i18n';
import { Settings } from '@/types/Settings';

const props = defineProps<{
  calculation: Calculation | null,
  settings: Settings
}>();

const fromCurrencySymbol = computed(() =>
  props.calculation?.fromCurrency
    ? currencySymbols[props.calculation.fromCurrency] || props.calculation.fromCurrency
    : ''
);
const toCurrencySymbol = computed(() => props.calculation?.toCurrency ? currencySymbols[props.calculation?.toCurrency] || props.calculation?.toCurrency : '');

const { t, locale } = useI18n();
const { formatCurrency } = useCurrencyFormatter(locale.value);

const formatCurrency_ = (value: number | null | undefined) => formatCurrency(props.settings.maximumFractionDigits, value);

</script>