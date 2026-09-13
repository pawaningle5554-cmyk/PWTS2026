import {test ,expect} from '@playwright/test'

test("Handling Calender", async({page})=>{

await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
await page.locator(".ui-datepicker-trigger").click()

let targetDate = "29"
let targetMonth = "May"
let targetYear = "2027"

const monthLocator = page.locator(".ui-datepicker-month")
const yearLocator = page.locator(".ui-datepicker-year")

while(true){
    if( (await monthLocator.textContent()==targetMonth) &&
    (await yearLocator.textContent()==targetYear))
    {
        await page.getByText(targetDate,{exact:true}).click()
        break
    }
    else{
        await page.locator("//a[@title='Next']").click()
        await page.waitForTimeout(3000)
        await page.screenshot({path: "screenshot/date.jpeg"})
    }





}




})