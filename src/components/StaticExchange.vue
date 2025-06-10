<template>
  <ion-card v-if="usdExchange || eurExchange">
    <ion-card-header class="ion-text-center">
      <ion-card-title>
        {{ t('staticExchangeTitle') }}
      </ion-card-title>
    </ion-card-header>
    <ion-card-content class="ion-text-center">
      <ion-grid>
        <ion-row v-if="usdExchange">
          <ion-col offset="3" size="3">$</ion-col>
          <ion-col size="3">{{ formatCurrency_(usdExchange) }} TL</ion-col>
        </ion-row>
        <ion-row v-if="eurExchange">
          <ion-col offset="3" size="3">€</ion-col>
          <ion-col size="3">{{ formatCurrency_(eurExchange) }} TL</ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { convertExchange } from '@/services/api';
import { useCurrencyFormatter } from '@/composables/useCurrencyFormatter';
import { useI18n } from 'vue-i18n';
import { Settings } from '@/types/Settings';

const props = defineProps<{
  settings: Settings
}>();

const usdExchange: number | null | undefined = (await convertExchange('USD', 'YTL'))?.sale;
const eurExchange: number | null | undefined = (await convertExchange('EUR', 'YTL'))?.sale;

const { formatCurrency } = useCurrencyFormatter();
const formatCurrency_ = (value: number | null | undefined) => formatCurrency(props.settings.maximumFractionDigits, value);
const { t } = useI18n();
</script>