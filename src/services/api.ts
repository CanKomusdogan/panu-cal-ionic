import { useHttp } from '@/composables/useHttp';

const baseUrl =
  'https://www.yapikredi.com.tr/service-data/calculate-tools/exchange';

interface ExchangeItem {
  code: string;
  buy: number;
  sale: number;
}

export const convertExchange = async (
  fromCurrency: string,
  toCurrency: string,
  amount?: number | null
): Promise<ExchangeItem | null> => {
  try {
    const { get } = useHttp();

    const xml = await get(baseUrl, {
      responseType: 'xml'
    }, {
      currency: fromCurrency,
      tocurrency: toCurrency,
      amount: (amount ?? 1).toString()
    });

    const exchangeNode = xml.querySelector('ExchangeItems > Exchange');
    if (exchangeNode) {
      return {
        code: exchangeNode.getAttribute('Code') || '',
        buy: parseFloat((exchangeNode.getAttribute('Buy') || '0').replace(',', '.')),
        sale: parseFloat((exchangeNode.getAttribute('Sale') || '0').replace(',', '.')),
      };
    }

    return null;
  } catch (err) {
    console.error('An error occurred while converting exchange: ', err);
    return null;
  }
};