<template>
  <ion-menu :content-id="contentId">
    <ion-header>
      <ion-toolbar>
        <ion-title>
          {{ t('settingsMenuTitle') }}
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-checkbox v-model="internalSettings.hideCompanyLogo">
            {{ t('hideCompanyLogoSettingLabel') }}
          </ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-range v-model="internalSettings.maximumFractionDigits" :label="t('maximumFractionDigitsSettingLabel')" ticks snaps :min="0" :max="4" pin>
            <ion-button @click="internalSettings.maximumFractionDigits--" shape="round" color="light" slot="start">
              <ion-icon slot="icon-only" :icon="remove" />
            </ion-button>
            <ion-button @click="internalSettings.maximumFractionDigits++" shape="round" color="light" slot="end">
              <ion-icon slot="icon-only" :icon="add" />
            </ion-button>
          </ion-range>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script setup lang="ts">
import { Settings } from '@/types/Settings';
import { add, remove } from 'ionicons/icons';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const emit = defineEmits<{
  (e: 'update:settings', value: Settings): void;
}>();

const props = defineProps<{
  contentId: string;
  settings: Settings;
}>();

const { t } = useI18n();

const internalSettings = computed({
  get: () => {
    return props.settings;
  }, set: (value) => {
    emit('update:settings', value);
  }
});

</script>