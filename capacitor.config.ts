import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.elevainta.rdhrising',
  appName: 'RDH Rising',
  webDir: 'public',
  server: {
    url: 'https://elevainta.vercel.app',
    // Bundled page (in webDir) shown when the live site can't load, e.g. offline
    errorPath: 'offline.html'
  }
};

export default config;
