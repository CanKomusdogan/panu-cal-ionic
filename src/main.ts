import { createApp } from 'vue';
import App from './App.vue';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import {
  IonApp,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonContent,
  IonHeader,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonImg,
  IonText,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonSpinner
} from '@ionic/vue';

const app = createApp(App)
  .use(IonicVue);

app.component('IonApp', IonApp);
app.component('IonGrid', IonGrid);
app.component('IonRow', IonRow);
app.component('IonCol', IonCol);
app.component('IonCardHeader', IonCardHeader);
app.component('IonCardTitle', IonCardTitle);
app.component('IonCardContent', IonCardContent);
app.component('IonHeader', IonHeader);
app.component('IonToolbar', IonToolbar);
app.component('IonContent', IonContent);
app.component('IonCard', IonCard);
app.component('IonInput', IonInput);
app.component('IonImg', IonImg);
app.component('IonText', IonText);
app.component('IonLabel', IonLabel);
app.component('IonSegment', IonSegment);
app.component('IonSegmentButton', IonSegmentButton);
app.component('IonTitle', IonTitle);
app.component('IonSpinner', IonSpinner);


app.mount('#app');
