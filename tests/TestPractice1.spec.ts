import {test, expect} from '@playwright/test'

test('Test-100 Test LoginPage-Practice' , async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForURL('https://testautomationpractice.blogspot.com/')
    await page.locator('h1.title').isVisible()
    
    await page.locator('(//input[@class="form-control"])[1]').first().fill('Pawan')
    await page.locator('#email').fill('PawanIngle@gmail.com')
    await page.getByPlaceholder('Enter Phone').fill('2025687992')
    await page.getByLabel('Address:').fill('Mehkar')

    await page.locator('//label[text() ="Male"]').click()
    await page.locator('//div[@class="form-group"]//input[@id="monday"]').click()
    await expect(page.locator('//div[@class="form-group"]//input[@id="monday"]')).toBeChecked()

    await page.locator('#country').selectOption('Canada')
    await page.selectOption('#country', {value:'india'})
    await page.waitForTimeout(2000)
})

test('2001 - differnet locators on webpage', async({page})=>{

const Home = page.getByRole("link", {name:'Home'}).first()
const Home1 = page.locator('//div[@name="Cross-Column"]//li[2]')
const forSeleniumText = page.locator('//span[text()="For Selenium, Cypress & Playwright"]')
const AutomationTesting = page.locator('//h1[contains(text(), "Automation Testing")]')
const dataEntryForm = page.getByRole('link' , {name:'Data Entry Form'})
const email = page.locator('//div[@class="form-group"]//input[2]')
const name = page.locator('//label[@for="textbox"]/following-sibling::input[@id="name"]')
const male = page.locator('(//input[@type="radio"])[1]')
const daysTuesday = page.locator('(//div[@class="form-group"]//input[@type="checkbox"])[3]')
const country = page.locator('#country') //Select Brazil
const colors = page.locator('//select[@id="colors"]//option[@value="yellow"]')//Select yellow 
const animal = page.locator('//option[@value="fox"]') //select fox
const date1 = page.getByPlaceholder('placeholder="Start Date"')
const date2 = page.getByPlaceholder('placeholder="End Date"')
const submitButton =page.getByRole('button', {name:"Submit"})

await page.goto('https://testautomationpractice.blogspot.com/')
await expect(Home).toBeVisible()
await expect(forSeleniumText).toBeVisible()
await expect(AutomationTesting).toBeVisible()
await expect(dataEntryForm).toContainText('Data Entry Form')
await email.fill('pawan')
await male.click()
await expect(male).toBeChecked()
await name.pressSequentially("PawanIngle")
await daysTuesday.click()
await country.selectOption("Brazil")
await colors.click() //Yellow
await animal.click() //Fox
//await date1.click()
await date1.pressSequentially('05291996')
await date2.fill('12/12/2012')
await submitButton.click()

})

test('Calander Test' , async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
await page.locator("#datepicker").first().click()

const targetDate = "15"
const targetMonth = "November"
const targetYear = "2028"

 const monthPicker = page.locator(".ui-datepicker-month")
 const yearPicker = page.locator(".ui-datepicker-year")

 while(!((await monthPicker.textContent()== targetMonth) && (await yearPicker.textContent() == targetYear)))
    {
        await page.getByText('Next', {exact:true}).first().click()
    }
 await page.getByText(targetDate, {exact:true}).click()
 await page.waitForTimeout(2000)


})