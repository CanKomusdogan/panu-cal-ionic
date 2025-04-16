<template>
  <ion-app>
    <ion-header>
      <ion-toolbar class="ion-text-center">
        <HeaderTitle />
      </ion-toolbar>
    </ion-header>

    <Tab1Page />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp } from '@ionic/vue';
import Tab1Page from '@/views/Tab1Page.vue';
import HeaderTitle from '@/components/HeaderTitle.vue';
</script>
