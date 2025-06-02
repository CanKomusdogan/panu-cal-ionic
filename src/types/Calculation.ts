export default interface Calculation {
  fromCurrency: string;
  toCurrency: string;
  originalCurrencyResult?: number | null;
  selectedCurrencyResult: number;
  originalCurrencyResultVat?: number | null;
  selectedCurrencyResultVat?: number | null;
}