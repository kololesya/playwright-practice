import { devices, defineConfig } from '@playwright/test';

const locations = {
  warsaw: { latitude: 52.2297, longitude: 21.0122 },
};

export default defineConfig({
  testDir: './tests',
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:3000',
    geolocation: locations.warsaw,
    permissions: ['geolocation'],
  },

  projects: [
    {
      name: 'setup',
      testMatch: /global\.setup\.ts/,
    },
    {
      name: 'chromium',
      dependencies: ['setup'],
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      dependencies: ['setup'],
      use: { ...devices['Desktop Firefox'] },
    },
  ],

  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000',
  },
});