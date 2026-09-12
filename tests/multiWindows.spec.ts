import {test,expect} from '@playwright/test'
test("multi windows handle",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")

    const page1 = page.waitForEvent("popup")
    await page.getByRole("button",{name:"click"}).click()

   const newPage= await page1
    await (newPage.getByText("Downloads",{exact:true})).click()
    await expect(newPage.getByText("Downloads",{exact:true}).first()).toContainText("Downloads")
})

test("Handling new window",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")

    await page.locator("(//a[@class='analystic'])[2]").click()

    const page2= page.waitForEvent("popup")
    await page.getByRole('button',{name:"click"}).click()
    const newPage2= await page2
    await newPage2.getByRole('link',{name:"Documentation"}).click()

    const headings= newPage2.getByRole('heading',{name:"The Selenium Browser "})
    
    await expect(headings).toBeVisible()

    const textAviaiable =await headings.innerText()
    console.log(textAviaiable)
})

test("handling multiple window",async({page})=>{
 await page.goto("https://demo.automationtesting.in/Windows.html")
 await page.getByText("Open Seperate Multiple Windows",{exact:true}).first().click()

 const page3 = page.waitForEvent("popup")
 await page.locator("//button[@onclick='multiwindow()']").click()
    const newPage3= await page3
    await (newPage3.getByRole('heading',{name:"The Selenium Browser "})).isVisible()
    await expect(newPage3.locator("#email")).toHaveValue("Email id for Sign Up")

})