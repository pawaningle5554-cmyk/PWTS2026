// Alert - "dialog" event appeared on the page

// 1. Simple Alert - Only one button
// 2. Confirm Alert - Yes/No, Submit/Cancel
// 3. Prompt Alert - Along with Yes/No - textbox as well

// "dialog" event 
// "popup" event - Child window/tab/page


// Step by Step process to handle alert

// 1. Launch the url
// 2. Wait for "dialog" event without using await
// 3. Click on the button which is responsible for generation of an alert

// In Playwright there is a class known as Dialog

// 1. dialog.accept(argument?) - To click on Yes/Ok/Submit
// 2. dialog.dismiss() - To click on the Cancel/No
// 3. dialog.message() - To get the text displayed on the alert

import {test, expect} from '@playwright/test'

test("Handle alert-Ok" , async ({page})=>{
    await page.goto("https://demoqa.com/alerts")

    page.on("dialog" , async(alert)=>{
        await console.log(alert.message());
        alert.accept()
    })
    await page.locator("#alertButton").click()
})

test("Handling alerts for two button",async({page})=>{
    await page.goto("https://demoqa.com/alerts")

    page.on("dialog",async(alert)=>{
         await console.log(alert.message());
        await alert.accept()
    })
    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toHaveText("You selected Ok")
})

test("Handling alert for dismiss/No", async({page})=>{
    await page.goto("https://demoqa.com/alerts")

    const prompt = "Pawan"
    page.on("dialog",async (alert)=>{
        console.log(alert.message())
        alert.accept(prompt)
    })
    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toHaveText(`You ente red ${prompt}`)
})
