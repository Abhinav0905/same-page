import { expect, test } from "@playwright/test";

test("the roommate sample exposes three gaps and creates a shared message", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Try the roommate example" }).click();
  await page.getByRole("button", { name: "Compare our versions" }).click();

  await expect(page.getByRole("heading", { name: "Here is where your versions split." })).toBeVisible();
  await expect(page.locator(".score")).toContainText(/2\s*of 5 aligned/);
  await expect(page.getByText("3 details need a quick check.")).toBeVisible();
  await expect(page.getByText("“by Friday, October 30”", { exact: true })).toBeVisible();
  await expect(page.getByText("“on Monday, November 2”", { exact: true })).toBeVisible();

  const message = page.getByLabel("Shared confirmation message");
  await expect(message).toHaveValue(/Amount: is it \$800, or half of the \$1,700\?/);
  await expect(message).toHaveValue(/Timing: is it by Friday, October 30, or on Monday, November 2\?/);
  await expect(message).toHaveValue(/Condition: should it be after the utility bill arrives, or even if the utility bill hasn't arrived\?/);
});

test("the shared message is editable and reset clears the experience", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Try the roommate example" }).click();
  await page.getByRole("button", { name: "Compare our versions" }).click();

  const message = page.getByLabel("Shared confirmation message");
  await message.fill("Here is the plan we both confirmed.");
  await expect(message).toHaveValue("Here is the plan we both confirmed.");

  await page.getByRole("button", { name: "Start over" }).click();
  await expect(page.getByRole("heading", { name: "Here is where your versions split." })).not.toBeVisible();
  await expect(page.getByRole("button", { name: "Compare our versions" })).toBeDisabled();
  await expect(page.getByLabel("Version A name")).toHaveValue("");
});

