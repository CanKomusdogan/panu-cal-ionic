<template>
  <ion-grid class="ion-align-items-center ion-text-end ion-align-self-center">
    <ion-row>
      <ion-col size="12">
        <ion-select :cancel-text="t('cancel')" interface="action-sheet" color="secondary" shape="round"
                    :label="t('baseCurrencySelectLabel')"
                    v-model="internalSelectedCurrency">
          <ion-select-option
            v-for="(currency, key) in t('currencies') === 'tr' ? turkishCurrencies : englishCurrencies"
            :key="key"
            :value="key"
          >
            {{ currencySymbols[key] || key }} {{ currency.name }}
          </ion-select-option>
        </ion-select>
      </ion-col>
      <ion-col size="12">
        <ion-select :cancel-text="t('cancel')" interface="action-sheet" color="secondary" shape="round"
                    :label="t('targetCurrencySelectLabel')" v-model="internalTargetCurrency">
          <ion-select-option
            v-for="(currency, key) in t('currencies') === 'tr' ? turkishCurrencies : englishCurrencies" :key="key"
            :value="key">
            {{ currencySymbols[key] || key }} {{ currency.name }}
          </ion-select-option>
        </ion-select>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import { englishCurrencies, currencySymbols, turkishCurrencies } from '@/constants/currency';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  selectedCurrency: string;
  targetCurrency: string;
}>();

const emit = defineEmits<{
  (e: 'update:selectedCurrency', value: string): void;
  (e: 'update:targetCurrency', value: string): void;
}>();

const internalSelectedCurrency = computed({
  get: () => {
    return props.selectedCurrency;
  }, set: (value) => {
    emit('update:selectedCurrency', value);
  }
});

const internalTargetCurrency = computed({
  get: () => {
    return props.targetCurrency;
  }, set: (value) => {
    emit('update:targetCurrency', value);
  }
});

const { t } = useI18n();
</script>