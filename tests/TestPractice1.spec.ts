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

test("Practcie Form " , async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    //Handle Input File
    await page.locator("#firstName").pressSequentially("Pawan")
    await expect(page.locator("#userEmail-label")).toHaveText("Email")

    //RadioButton
    await page.getByText("Male",{exact:true}).check()
    await expect(page.getByText("Male",{exact:true})).toBeChecked()

    //Date ODF Birth
    await page.locator("#dateOfBirthInput").fill("19 Nov 2026")

    //await page.locator(".react-datepicker__month-select").selectOption({label:"November"})
    //await page.locator(".react-datepicker__year-select").selectOption({label:"2026"})

    await page.locator("(//input[@type='checkbox'])[2]").check()

    //File Uploads

    await page.locator("#uploadPicture").setInputFiles('test-data/Skill.png')
   const fileName= await page.locator("#uploadPicture").inputValue()
    console.log(fileName);
    expect(fileName).toContain("Skill.png")

    //Select State and check city Disable

    await expect(page.locator("#react-select-4-input")).toBeDisabled()

    await page.locator("#react-select-3-input").click()
    await page.getByText("NCR",{exact:true}).click()
    await expect(page.getByText("NCR",{exact:true})).toHaveText("NCR")

    await expect(page.locator("#react-select-4-input")).toBeEnabled()
    
    await page.locator('#react-select-4-input').click();
    await page.getByText('Delhi', { exact: true }).click();

})

test("Alert on webPage", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html")
    page.on("dialog", async(alert)=>{
        alert.accept()
        console.log(alert.message());  
    })
    await page.locator('//button[@onclick="alertbox()"]').click()
})

test("Alert on webPage Ok / Cancel", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html")
    await page.getByText("Alert with OK & Cancel ", {exact:true}).click()

   page.on("dialog", async(alert)=>{
    alert.accept()
    console.log(alert.message());
    
   })
    await page.locator('//button[@onclick="confirmbox()"]').click()
    await expect(page.getByText("You pressed Ok", {exact:true})).toHaveText("You pressed Ok")

     const containText = await page.getByText("You pressed Ok", {exact:true}).textContent()
     console.log(containText);
     
})  

test("check comparioson opertor", async ({page})=>{
    let a = 10
    let b=  10
    console.log(a==b);
    


})