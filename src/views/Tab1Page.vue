<template>

  <ion-card>
    <ion-card-content>
      <ion-input type="text" inputmode="decimal" pattern="[0-9]*[.,]?[0-9]*"
                 :label="(selectedCurrencySymbol === 'Au' ? t('gold') : selectedCurrencySymbol) + ` ${ t('amountInputLabel') }`"
                 label-placement="floating" fill="solid" v-model.number="amount" clear-input enterkeyhint="next" />
      <CurrencySegment v-model:selected-currency="selectedCurrency" v-model:target-currency="targetCurrency" />
      <ion-row>
        <ion-col>
          <ion-input type="text" inputmode="decimal" pattern="[0-9]*[.,]?[0-9]*" :label="t('profitRateInputLabel')"
                     v-model.number="profitRate"
                     :disabled="profitRateInputDisabled" enterkeyhint="done" auto />
        </ion-col>
        <ion-col>
          <ion-input type="text" inputmode="decimal" pattern="[0-9]*[.,]?[0-9]*" :label="t('profitAmountInputLabel')"
                     v-model.number="profitAmount"
                     :disabled="profitAmountInputDisabled"
                     enterkeyhint="done"
                     clear-input />
        </ion-col>
      </ion-row>
      <hr />
      <h2 class="ion-text-center">{{ t('vatRateSegmentTitle') }}</h2>
      <VatSegment v-model:vat-rate="vatRate" />
    </ion-card-content>
  </ion-card>

  <CalculationsCard :settings="settings" :calculation="calculation" />

  <br>
  <hr>
  <br>

  <Suspense>
    <StaticExchange :settings="settings" color="transparent" style="box-shadow: none" />

    <template #fallback>
      <div class="ion-text-center">
        {{ t('staticExchangeLoading') }}
        <ion-spinner />
      </div>
    </template>
  </Suspense>

  <hr>

  <div v-show="!settings.hideCompanyLogo" style="display: flex !important" class="ion-justify-content-center">
    <ion-img v-if="!isDark" style="max-width: 300px" src="/panulogo_dark.png" alt="Panu logo" />
    <ion-img v-else src="/panulogo.png" style="max-width: 300px" alt="Panu logo" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref, watch } from 'vue';
import Calculation from '@/types/Calculation';
import { allFilled, amountAndVatFilled } from '@/services/input-handling';
import { currencySymbols } from '@/constants/currency';
import { useTheme } from '@/composables/useTheme';
import { useI18n } from 'vue-i18n';
import { Settings } from '@/types/Settings';

const { t } = useI18n();
const CurrencySegment = defineAsyncComponent(() => import('@/components/CurrencySelection.vue'));
const VatSegment = defineAsyncComponent(() => import('@/components/VatSegment.vue'));
const CalculationsCard = defineAsyncComponent(() => import('@/components/CalculationsCard.vue'));
const StaticExchange = defineAsyncComponent(() => import('@/components/StaticExchange.vue'));

defineProps<{
  settings: Settings;
}>();

const { isDark } = useTheme();

const selectedCurrency = ref('USD');
const selectedCurrencySymbol = computed(() => selectedCurrency.value
  ? currencySymbols[selectedCurrency.value] || selectedCurrency
  : '');
const targetCurrency = ref('YTL');

const amount = ref<number | null>(null);

const profitRate = ref<number | null>(null);
const profitRateInputDisabled = computed(() => !!profitAmount.value);

const profitAmount = ref<number | null>(null);
const profitAmountInputDisabled = computed(() => !!profitRate.value);

const vatRate = ref<number | null>(20);

const calculation = ref<Calculation | null>(null);

const states = computed(() => ({
  selectedCurrency: selectedCurrency.value,
  targetCurrency: targetCurrency.value,
  amount: amount.value,
  profitRate: profitRate.value,
  profitAmount: profitAmount.value,
  vatRate: vatRate.value
}));

watch(states, async (value) => {
  if (value.amount && (value.profitRate || value.profitAmount) && value.vatRate) {
    calculation.value = await allFilled(value.selectedCurrency, value.targetCurrency, value.amount, value.profitRate, value.profitAmount, value.vatRate);
  } else if (value.amount && value.vatRate) {
    calculation.value = await amountAndVatFilled(value.selectedCurrency, value.targetCurrency, value.amount, value.vatRate);
  } else calculation.value = null;
});
</script>
