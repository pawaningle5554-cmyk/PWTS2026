import {test, expect} from '@playwright/test'

test("iFrame Handling" ,async ({page})=>{
await page.goto("https://demo.automationtesting.in/Frames.html")

const framePage = page.frameLocator("#singleframe")

await framePage.locator("//input[@type='text']").first().fill("Testing Iframe")
await expect(framePage.locator("//input[@type='text']").first()).toHaveValue("Testing Iframe")

await page.getByText("Iframe with in an Iframe",{exact:true}).click()

 const outerFrame = page.frameLocator("#Multiple iframe")
 const innerFrame = outerFrame.frameLocator(".iframe-container iframe")

 await innerFrame.locator("//input[@type='text']").first().fill("Testing Iframe")
await expect(innerFrame.locator("//input[@type='text']").first()).toHaveValue("Testing Iframe")



})