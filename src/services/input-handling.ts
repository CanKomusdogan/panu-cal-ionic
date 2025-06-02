import { calculateSellingPrice, calculateVat, ProfitType } from '@/services/math';
import { convertExchange } from '@/services/api';
import Calculation from '@/types/Calculation';

export const allFilled = async (baseCurrency: string, targetCurrency: string, amount: number, profitRate: number | null, profitAmount: number | null, vatRate: number): Promise<Calculation | null> => {
  if (baseCurrency !== targetCurrency) {
    const exchange = await convertExchange(baseCurrency, targetCurrency, amount);
    if (exchange) {
      const profitType =
        profitRate ? ProfitType.Rate :
          profitAmount ? ProfitType.Amount :
            ProfitType.Rate;

      const result = calculateSellingPrice(
        exchange.sale,
        amount,
        profitRate,
        profitAmount,
        profitType
      );

      const originalCurrencyResultVat = calculateVat(result.sellingPriceOriginal, vatRate);
      const selectedCurrencyResultVat = calculateVat(result.sellingPrice, vatRate);

      return {
        fromCurrency: baseCurrency,
        toCurrency: targetCurrency,
        originalCurrencyResult: result.sellingPriceOriginal,
        selectedCurrencyResult: result.sellingPrice,
        originalCurrencyResultVat,
        selectedCurrencyResultVat
      };
    }
  } else {
    const profitType =
      profitRate ? ProfitType.Rate :
        profitAmount ? ProfitType.Amount :
          ProfitType.Rate;

    const result = calculateSellingPrice(
      null,
      amount,
      profitRate,
      profitAmount,
      profitType
    );

    const originalCurrencyResultVat = calculateVat(result.sellingPriceOriginal, vatRate);
    const selectedCurrencyResultVat = calculateVat(result.sellingPrice, vatRate);

    return {
      fromCurrency: baseCurrency,
      toCurrency: targetCurrency,
      originalCurrencyResult: result.sellingPriceOriginal,
      selectedCurrencyResult: result.sellingPrice,
      originalCurrencyResultVat,
      selectedCurrencyResultVat
    };
  }

  return null;
};

export const amountAndVatFilled = async (baseCurrency: string, targetCurrency: string, amount: number, vatRate: number): Promise<Calculation | null> => {
  if (baseCurrency !== targetCurrency) {
    const exchange = await convertExchange(baseCurrency, targetCurrency, amount);
    if (exchange) {
      const originalCurrencyResultVat = calculateVat(amount, vatRate);
      const selectedCurrencyResultVat = calculateVat(exchange.sale, vatRate);

      return {
        fromCurrency: baseCurrency,
        toCurrency: targetCurrency,
        originalCurrencyResult: amount,
        selectedCurrencyResult: exchange.sale,
        originalCurrencyResultVat,
        selectedCurrencyResultVat
      };
    }
  } else {
    const selectedCurrencyResultVat = calculateVat(amount, vatRate);

    return {
      fromCurrency: baseCurrency,
      toCurrency: targetCurrency,
      originalCurrencyResult: null,
      selectedCurrencyResult: amount,
      originalCurrencyResultVat: null,
      selectedCurrencyResultVat
    };
  }

  return null;
};