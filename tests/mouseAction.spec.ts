import {test, expect} from "@playwright/test"

test("Handling double click and right click",async ({page})=>{

await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
await page.getByText('Double-Click Me To See Alert', {exact:true}).dblclick()

await page.getByText('right click me',{exact:true}).click()
await page.getByText('Quit', {exact:true}).nth(1).click

})

test("Handling mouse over on an element", async ({page})=>{
    await page.goto('https://www.spicejet.com/')
    await page.getByText('SpiceClub',{exact:true}).first().hover()
    //await page.waitForTimeout(3000)
    await expect(page.getByText('Use Points',{exact:true})).toHaveText('Use Points')
    

    const pagePromise = page.waitForEvent('popup');
    await page.getByText('Use Points', { exact: true }).first().click();
    const newPage = await pagePromise;
    await expect(newPage.getByRole('button', {name:'BOOK NOW'}).first()).toBeEnabled()
    await expect(newPage.locator('.header-logo').first()).toBeVisible()
})

test('Sroll into view if needed', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByText('Home', {exact:true}).first().scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
    await page.getByText('Home', {exact:true}).first().click()
})

test("drag and Drop", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const source = page.locator("#draggable")
    const target = page.locator("#droppable")

    await source.dragTo(target)
    await expect(page.locator(""))
    await expect(page.locator("div#droppable p")).toHaveText("Dropped!")
})

test("drag and Drop Mouse", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const source1 = page.locator("#draggable")
    const target1 = page.locator("#droppable")

    await source1.hover()
    await page.mouse.down()
    await target1.hover()
    await page.mouse.up()

    await expect(page.locator("div#droppable p")).toHaveText("Dropped!")
    

})