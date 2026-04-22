const { test, expect } = require("@playwright/test");

test("index page renders game grid", async ({ page }) => {
  await page.goto("/index.html");
  await expect(page.locator("h1")).toContainText("Угадай мелодию");
  await expect(page.locator("#gameGrid .cell")).toHaveCount(25);
});

test("video page renders game grid", async ({ page }) => {
  await page.goto("/video.html");
  await expect(page.locator("h1")).toContainText("Магия кино");
  await expect(page.locator("#gameGrid .cell")).toHaveCount(25);
});
