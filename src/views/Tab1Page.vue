<template>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-content>
          <ion-input type="number" min="0" max="9007199254740991"  :label="selectedCurrencySymbol + ' Tutar'" label-placement="floating" fill="solid" v-model.number="amount" clear-input />
          <CurrencySegment :selected-currency="selectedCurrency" @update:selected-currency="selectedCurrency = $event" />
          <ion-row>
            <ion-col>
              <ion-input type="number" min="0" max="9007199254740991" label="% Kar Oranı" v-model.number="profitRate" :disabled="profitRateInputDisabled" />
            </ion-col>
            <ion-col>
              <ion-input type="number" min="0" max="9007199254740991" label="Kar Tutarı" v-model.number="profitAmount" :disabled="profitAmountInputDisabled"
                         clear-input />
            </ion-col>
          </ion-row>
          <hr />
          <h2 class="ion-text-center">KDV Oranı</h2>
          <VatSegment :vat-rate="vatRate" @update:vat-rate="vatRate = $event" />
        </ion-card-content>
      </ion-card>

      <CalculationsCard :calculation="calculation" />

      <br>
      <hr>
      <br>

      <Suspense>
        <StaticExchange color="transparent" style="box-shadow: none" />

        <template #fallback>
          <div class="ion-text-center">
            Satış kuru yükleniyor...
            <ion-spinner />
          </div>
        </template>
      </Suspense>

      <hr>

      <div style="display: flex !important" class="ion-justify-content-center">
        <ion-img v-if="!isDark" style="max-width: 300px" src="/panulogo_dark.png" alt="Panu logo" />
        <ion-img v-else src="/panulogo.png" style="max-width: 300px" alt="Panu logo" />
      </div>

    </ion-content>
</template>

<script setup lang="ts">
import CurrencySegment from '@/components/CurrencySegment.vue';
import { computed, ref, watch } from 'vue';
import VatSegment from '@/components/VatSegment.vue';
import CalculationsCard from '@/components/CalculationsCard.vue';
import Calculation from '@/types/Calculation';
import { allFilled, amountAndVatFilled } from '@/services/input-handling';
import { currencySymbols } from '@/constants/currency';
import StaticExchange from '@/components/StaticExchange.vue';
import { useTheme } from '@/composables/useTheme';

const { isDark } = useTheme();

const selectedCurrency = ref('USD');
const selectedCurrencySymbol = computed(() => selectedCurrency.value
  ? currencySymbols[selectedCurrency.value] || selectedCurrency
  : '');

const amount = ref<number | null>(null);

const profitRate = ref<number | null>(null);
const profitRateInputDisabled = computed(() => !!profitAmount.value);

const profitAmount = ref<number | null>(null);
const profitAmountInputDisabled = computed(() => !!profitRate.value);

const vatRate = ref<number | null>(20);

const calculation = ref<Calculation | null>(null);

const states = computed(() => ({
  selectedCurrency: selectedCurrency.value,
  amount: amount.value,
  profitRate: profitRate.value,
  profitAmount: profitAmount.value,
  vatRate: vatRate.value,
}));

watch(states, async (value) => {
  if (value.amount && (value.profitRate || value.profitAmount) && value.vatRate) {
    calculation.value = await allFilled(value.selectedCurrency, value.amount, value.profitRate, value.profitAmount, value.vatRate);
  } else if (value.amount && value.vatRate) {
    calculation.value = await amountAndVatFilled(value.selectedCurrency, value.amount, value.vatRate);
  }
});
</script>