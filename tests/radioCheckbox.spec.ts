import {test,expect} from '@playwright/test'

test("Handling radio button and checkbox", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    // click() - Click on an element
    // check() - It validates if the element is already checked/selected, 
    // if it is not selected then it click on the element. Only works for 
    // radio button or checkbox element

    // uncheck() - It validates if the element is not already checked, if it is
    // checked then it click on the element.


    // toBeChecked() - Which validates if the element is already checked or not

    await page.getByRole("radio", {name:'Female'}).click()
    await expect(page.getByRole("radio", {name:'Female'})).toBeChecked()

    await page.locator("#tuesday").check()
    await expect(page.locator("#tuesday")).toBeChecked()

    await page.locator("#tuesday").uncheck()
    await expect(page.locator("#tuesday")).not.toBeChecked()

    await page.locator("#tuesday").uncheck()




})

// get the text value of an element/multiple element

test("Get the text value from an element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // textContent() - return the text value of an element even if 
    // the element is not visible on the page

    // innerText() - Return the text value from visible element on the page


    const text = await page.locator("h1.title").innerText()
    console.log(text);

    // Get the text value from multiple elements

    // allTextContents()
    // allInnerTexts()

    const allTexts = await page.locator("h2.title").allTextContents()
    console.log(allTexts)
    

})

test("CheckRadio button" ,async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('//label[@for="male"]').click()
    await expect(page.locator('//label[@for="male"]')).toBeChecked()

    await page.locator('//label[text()="Friday"]').check()
    await expect (page.locator('//label[text()="Friday"]')).toBeChecked()

    await page.locator('//label[text()="Friday"]').uncheck()
    await page.locator('//label[text()="Saturday"]').check() 
    await page.waitForTimeout(5000)    

})