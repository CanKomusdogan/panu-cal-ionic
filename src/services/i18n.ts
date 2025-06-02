import { createI18n } from 'vue-i18n';

const messages = {
  tr: {
    settingsMenuTitle: 'Ayarlar',
    hideCompanyLogoSettingLabel: 'Panu Logosunu Gizle',
    maximumFractionDigitsSettingLabel: 'Ondalık',
    gold: 'Altın',
    amountInputLabel: 'Tutar',
    cancel: 'İptal',
    baseCurrencySelectLabel: 'Taban Döviz',
    targetCurrencySelectLabel: 'Hedef Döviz',
    currencies: 'tr',
    profitRateInputLabel: '% Kar Oranı',
    profitAmountInputLabel: 'Kar Tutarı',
    vatRateSegmentTitle: 'KDV Oranı',
    withoutVatCalculationTitle: 'KDV\'siz',
    withVatCalculationTitle: 'KDV\'li',
    staticExchangeTitle: 'Satış Kuru',
    staticExchangeLoading: 'Satış kuru yükleniyor...'
  },
  en: {
    settingsMenuTitle: 'Settings',
    hideCompanyLogoSettingLabel: 'Hide Panu Logo',
    maximumFractionDigitsSettingLabel: 'Fraction',
    gold: 'Gold',
    amountInputLabel: 'Amount',
    cancel: 'Cancel',
    baseCurrencySelectLabel: 'Base Currency',
    targetCurrencySelectLabel: 'Target Currency',
    currencies: 'en',
    profitRateInputLabel: '% Profit Rate',
    profitAmountInputLabel: 'Profit Amount',
    vatRateSegmentTitle: 'VAT Rate',
    withoutVatCalculationTitle: 'Without VAT',
    withVatCalculationTitle: 'With VAT',
    staticExchangeTitle: 'Selling Rate',
    staticExchangeLoading: 'Loading selling rate...'
  }
};

export const i18n = createI18n({
  legacy: false,
  locale: 'tr', // default
  fallbackLocale: 'en',
  messages
});