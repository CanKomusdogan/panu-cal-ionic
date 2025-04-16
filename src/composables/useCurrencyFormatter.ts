export const useCurrencyFormatter = () => {
  const formatCurrency = (value: number | null | undefined): string => {
    if (value == null || isNaN(value)) return '-';

    return value.toLocaleString('tr-TR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 4
    });
  };

  return { formatCurrency };
};