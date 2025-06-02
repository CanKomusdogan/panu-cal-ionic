export const currencySymbols: Record<string, string> = {
  USD: '$',
  EUR: '€',
  YTL: '₺',
  TRY: '₺',
  GBP: '£',
  AUD: 'A$',
  DKK: 'kr',
  SEK: 'kr',
  CHF: 'CHF',
  JPY: '¥',
  CAD: 'C$',
  KWD: 'KD',
  NOK: 'kr',
  SAR: '﷼',
  AED: 'د.إ',
  XAU: 'Au', // chemical symbol
};

type Currency = {
  name: string;
  code: string;
  mainConversionCurrencies?: string[];
  special?: boolean;
}

export const turkishCurrencies: Record<string, Currency> = {
  YTL: { name: "Türk Lirası", code: "tr", mainConversionCurrencies: ['USD', "EUR"] },
  USD: { name: "Amerikan Doları", code: "us", mainConversionCurrencies: ["EUR", "GBP"] },
  EUR: { name: "Euro", code: "eu", mainConversionCurrencies: ["USD", "GBP"] },
  XAU: { name: "Altın (gram)", code: "xau", special: true },
  GBP: { name: "İngiliz Sterlini", code: "gb", mainConversionCurrencies: ["USD", "EUR"] },
  AUD: { name: "Avustralya Doları", code: "au", mainConversionCurrencies: ["EUR", "GBP"] },
  DKK: { name: "Danimarka Kronu", code: "dk" },
  SEK: { name: "İsveç Kronu", code: "sek" },
  CHF: { name: "İsviçre Frangı", code: "ch" },
  JPY: { name: "Japon Yeni", code: "jp" },
  CAD: { name: "Kanada Doları", code: "ca" },
  KWD: { name: "Kuveyt Dinarı", code: "kw" },
  NOK: { name: "Norveç Kroneri", code: "no" },
  SAR: { name: "Suudi Arabistan Riyali", code: "sa" },
  AED: { name: "Birleşik Arap Emirlikleri Dirhemi", code: "ae" },
};

export const englishCurrencies: Record<string, Currency> = {
  YTL: { name: "Turkish Lira", code: "tr" },
  USD: { name: "United States Dollar", code: "us" },
  EUR: { name: "Euro", code: "eu" },
  XAU: { name: "Gold (gram)", code: "xau", special: true },
  GBP: { name: "Pound Sterling", code: "gb" },
  AUD: { name: "Australian Dollar", code: "au" },
  DKK: { name: "Danish Krone", code: "dk" },
  SEK: { name: "Swedish Krona", code: "sek" },
  CHF: { name: "Swiss Frang", code: "ch" },
  JPY: { name: "Japanese Yen", code: "jp" },
  CAD: { name: "Canadian Dollar", code: "ca" },
  KWD: { name: "Kuwaiti Dinar", code: "kw" },
  NOK: { name: "Norwegian Krone", code: "no" },
  SAR: { name: "Saudi Riyal", code: "sa" },
  AED: { name: "United Arab Emirates Dirham", code: "ae" },
};
