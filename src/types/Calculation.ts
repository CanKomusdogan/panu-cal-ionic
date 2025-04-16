export default interface Calculation {
  currency: string;
  originalCurrencyResult?: number | null;
  selectedCurrencyResult: number;
  originalCurrencyResultVat?: number | null;
  selectedCurrencyResultVat?: number | null;
}