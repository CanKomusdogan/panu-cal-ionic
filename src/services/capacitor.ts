import { Browser } from '@capacitor/browser';

export const openCapacitorSite = async (url: string) => {
  await Browser.open({ url });
};