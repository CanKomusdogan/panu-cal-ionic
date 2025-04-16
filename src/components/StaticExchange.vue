<template>
  <ion-card v-if="usdExchange || eurExchange">
    <ion-card-header class="ion-text-center">
      <ion-card-title>
        Satış Kuru
      </ion-card-title>
    </ion-card-header>
    <ion-card-content class="ion-text-center">
      <ion-grid>
        <ion-row v-if="usdExchange">
          <ion-col offset="3" size="3">$</ion-col>
          <ion-col size="3">{{ usdExchange }} TL</ion-col>
        </ion-row>
        <ion-row>
          <ion-col v-if="eurExchange" offset="3" size="3">€</ion-col>
          <ion-col size="3">{{ eurExchange }} TL</ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { convertExchange } from '@/services/api';

const usdExchange: number | null | undefined = (await convertExchange('USD', 'YTL'))?.sale;
const eurExchange: number | null | undefined = (await convertExchange('EUR', 'YTL'))?.sale;
</script>