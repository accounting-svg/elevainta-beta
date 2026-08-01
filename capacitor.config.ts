import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.elevainta.coachelevate',
  appName: 'Coach Elevé',
  webDir: 'public',
  server: {
    url: 'https://elevainta.vercel.app',
    cleartext: true
  }
};

export default config;
