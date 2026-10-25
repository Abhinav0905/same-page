import {mkdir} from "node:fs/promises";
import path from "node:path";
import {chromium} from "@playwright/test";

const screenshotDir = path.resolve("docs/screenshots");
await mkdir(screenshotDir, {recursive: true});

const browser = await chromium.launch({channel: "chrome", headless: true});
const page = await browser.newPage({viewport: {width: 1600, height: 1000}});
await page.goto("http://127.0.0.1:5173", {waitUntil: "networkidle"});

await page.screenshot({path: path.join(screenshotDir, "01-worked-example.png")});

await page.getByRole("button", {name: "Compare this example"}).click();
await page.getByRole("heading", {name: "Here is where your versions split."}).waitFor();
await page.locator(".results-section").screenshot({path: path.join(screenshotDir, "02-evidence-results.png")});
await page.locator(".confirmation-section").screenshot({path: path.join(screenshotDir, "03-shared-confirmation.png")});

await browser.close();
