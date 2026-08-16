import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.elevainta.rdhrising',
  appName: 'RDH Rising',
  webDir: 'public',
  server: {
    url: 'https://elevainta.vercel.app'
  }
};

export default config;
