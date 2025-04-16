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
        const sellingPrice = exchangeSale * (1 + safeProfitRate / 100);
        const sellingPriceOriginal = cost * (1 + safeProfitRate / 100);
        return { sellingPrice, sellingPriceOriginal };
      } else {
        const sellingPrice = cost * (1 + safeProfitRate / 100);
        const sellingPriceOriginal = 0;
        return { sellingPrice, sellingPriceOriginal };
      }

    case ProfitType.Amount:
      if (exchangeSale !== null) {
        const sellingPrice = exchangeSale + safeProfitAmount;
        const sellingPriceOriginal = cost + safeProfitAmount;
        return { sellingPrice, sellingPriceOriginal };
      } else {
        const sellingPrice = cost + safeProfitAmount;
        const sellingPriceOriginal = 0;
        return { sellingPrice, sellingPriceOriginal };
      }

    default:
      throw new Error('Invalid profit type.');
  }
}

function calculateVat(amount: number, vatRate: number): number {
  const vatAmount = amount * vatRate / 100;
  return amount + vatAmount;
}

export { ProfitType, type PriceResult, calculateSellingPrice, calculateVat };