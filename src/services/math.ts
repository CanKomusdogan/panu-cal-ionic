enum ProfitType {
  Rate,
  Amount
}

interface PriceResult {
  sellingPrice: number;
  sellingPriceOriginal: number;
}

function calculateSellingPrice(
  exchangeSale: number | null,
  cost: number,
  profitRate: number | null,
  profitAmount: number | null,
  profitType: ProfitType
): PriceResult {
  const safeProfitRate = profitRate ?? 0;
  const safeProfitAmount = profitAmount ?? 0;

  switch (profitType) {
    case ProfitType.Rate:
      if (exchangeSale !== null) {
        const sellingPrice = Number((exchangeSale * (1 + safeProfitRate / 100)).toFixed(2));
        const sellingPriceOriginal = Number((cost * (1 + safeProfitRate / 100)).toFixed(2));
        return { sellingPrice, sellingPriceOriginal };
      } else {
        const sellingPrice = Number((cost * (1 + safeProfitRate / 100)).toFixed(2));
        const sellingPriceOriginal = 0;
        return { sellingPrice, sellingPriceOriginal };
      }

    case ProfitType.Amount:
      if (exchangeSale !== null) {
        const sellingPrice = Number((exchangeSale + safeProfitAmount).toFixed(2));
        const sellingPriceOriginal = Number((cost + safeProfitAmount).toFixed(2));
        return { sellingPrice, sellingPriceOriginal };
      } else {
        const sellingPrice = Number((cost + safeProfitAmount).toFixed(2));
        const sellingPriceOriginal = 0;
        return { sellingPrice, sellingPriceOriginal };
      }

    default:
      throw new Error('Invalid profit type.');
  }
}

function calculateVat(amount: number, vatRate: number): number {
  const vatAmount = amount * vatRate / 100;
  const totalAmount = amount + vatAmount;
  return Number(totalAmount.toFixed(2));
}

export { ProfitType, type PriceResult, calculateSellingPrice, calculateVat };