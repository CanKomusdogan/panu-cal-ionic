import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.panu.panucal',
  appName: 'PanuCal',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      backgroundColor: "#000000",
      splashFullScreen: true,
      splashImmersive: true
    }
  }
};

export default config;
