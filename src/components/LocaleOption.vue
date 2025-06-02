<template>
  <ion-segment v-model="locale">
    <ion-segment-button value="tr">
      <ion-label><span class="font-size-large">🇹🇷</span> <span class="font-size-medium">Türkçe</span></ion-label>
    </ion-segment-button>
    <ion-segment-button value="en">
      <ion-label><span class="font-size-large">🇺🇸</span> <span class="font-size-medium">English</span></ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { onMounted, watch } from 'vue';
import { Preferences } from '@capacitor/preferences';

const { locale } = useI18n();

onMounted(async () => {
  const savedValue = (await Preferences.get({ key: 'locale' })).value as 'tr' | 'en' | null;
  if (savedValue) {
    locale.value = savedValue;
  }
});

watch(locale, async (value) => {
  await Preferences.set({
    key: 'locale',
    value: value
  });
});
</script>

<style scoped>
.font-size-large {
  font-size: large;
}

.font-size-medium {
  font-size: medium;
}
</style>