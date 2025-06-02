<template>
  <ion-app>
    <SettingsMenu v-model:settings="settings" :content-id="pageId" />
    <ion-header translucent mode="ios">
      <ion-toolbar>
        <ion-menu-toggle>
          <ion-button size="small" color="light">
            <ion-icon :icon="settingsOutline" />
          </ion-button>
        </ion-menu-toggle>
        <HeaderTitle class="ion-text-center" />
      </ion-toolbar>
      <ion-grid>
        <LocaleOption style="display: flex; background: transparent; box-shadow: none!important;"
                      class="ion-justify-content-end" />
      </ion-grid>
    </ion-header>
    <ion-content :id="pageId" :fullscreen="true">
      <Tab1Page :settings="settings" />
    </ion-content>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp } from '@ionic/vue';
import Tab1Page from '@/views/Tab1Page.vue';
import HeaderTitle from '@/components/HeaderTitle.vue';
import LocaleOption from '@/components/LocaleOption.vue';
import { settingsOutline } from 'ionicons/icons';
import SettingsMenu from '@/components/SettingsMenu.vue';
import { onMounted, ref, watch } from 'vue';
import { Settings } from '@/types/Settings';
import { Preferences } from '@capacitor/preferences';

const pageId = 'main-content';
const settings = ref<Settings>({
  hideCompanyLogo: false,
  maximumFractionDigits: 4
});

watch((settings), async (value) => {
  await Preferences.set({ key: 'settings', value: JSON.stringify(value) })
});

onMounted(async () => {
  const savedSettings = (await Preferences.get({ key: 'settings' })).value;
  if (!savedSettings) return;

  // if you judge me for this ill judge you too for judging me because of a "risk" that the
  // fucking settings failing which is not possible unless something is very wrong
  settings.value = JSON.parse(savedSettings) as Settings;
});
</script>

