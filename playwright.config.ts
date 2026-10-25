import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: /.*\.spec\.ts/,
  use: {
    baseURL: "http://127.0.0.1:4175",
    channel: "chrome",
    viewport: { width: 1280, height: 900 },
  },
  webServer: {
    command: "npm run dev -- --host 127.0.0.1 --port 4175 --strictPort",
    url: "http://127.0.0.1:4175",
    reuseExistingServer: true,
  },
});

