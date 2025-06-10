export const useCurrencyFormatter = (locale?: string) => {
  const formatCurrency = (maximumFractionDigits: number, value: number | null | undefined): string => {
    if (value == null || isNaN(value)) return '-';

    return value.toLocaleString(locale || 'tr-TR', {
      minimumFractionDigits: 0,
      maximumFractionDigits
    });
  };

  return { formatCurrency };
};