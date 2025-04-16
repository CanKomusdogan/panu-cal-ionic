<template>
  <ion-title @click="async () => await openCapacitorSite('https://www.panu.com.tr/')" style="cursor: pointer" color="success">panu.com.tr</ion-title>
</template>

<script setup lang="ts">

import { openCapacitorSite } from '@/services/capacitor';
</script>