import {test, expect} from "@playwright/test"

/*table
tbody - Total body of the table
tr - Table row
td - Table column (Table definition)
th - Table Header



//tr[td[text()='Chrome']]/td - Identify all the columns of Chrome row

//th[text()='CPU (%)'] - Identify the CPU % column

count(//th[text()='CPU (%)']/preceding-sibling::th)+1 - return the number of preceding-sibling

- 4 - cpu is at 5th



//tr[td[text()='Chrome']]/td[count(//th[text()='CPU (%)']/preceding-sibling::th)+1]

//tr[td[text()='Chrome']]/td[count(//th[text()='CPU (%)']/preceding-sibling::th)+1] */
test.describe('two tests', () => {


test ("Dnyamic Testget the value of cpu%" , async ({page})=>{
    const chromeLocator = page.locator("//tr[td[text()='Chrome']]/td[count(//th[text()='CPU (%)']/preceding-sibling::th)+1]")
    await page.goto("https://testautomationpractice.blogspot.com/")
    const ChromeValue=await chromeLocator.textContent()
    console.log("cpu Value", ChromeValue)
})
test ("FireFox CPU Value",async({page})=>{

    //Row =  //tr[td[text()="Firefox"]]/td
    //Cpu Column = count(//th[text()='CPU (%)']/preceding-sibling::th)+1

    const firefoxCPU= page.locator("//tr[td[text()='Firefox']]/td[count(//th[text()='CPU (%)']/preceding-sibling::th)+1]")
    await page.goto("https://testautomationpractice.blogspot.com/")
    const FireFox = await firefoxCPU.textContent()
    console.log("firefox value", firefoxCPU);
})

    test("Internet Explorer",async({page})=>{
      //  internetExplorer Row= //tr[td[text()="Internet Explorer"]]/td
      // internetExplorer Disk (MB/s) = //th[text()="Disk (MB/s)"]/preceding-sibling::th

      await page.goto("https://testautomationpractice.blogspot.com/")
      const internetExplore = page.locator("//tr[td[text()='Internet Explorer']]/td[count(//th[text()='Disk (MB/s)']/preceding-sibling::th)+1]")
        const interntValue= await internetExplore.textContent()
        console.log("internetExplorer-Disk",interntValue);
    })

    test("System(Memory(MB))",async ({page})=>{
        //Row of system = //tr[td[text()="System"]]/td
        // Column = //th[text()="Memory (MB)"]/preceding-sibling::th
        await page.goto("https://testautomationpractice.blogspot.com/")

        const systemMemory = page.locator('//tr[td[text()="System"]]/td[count(//th[text()="Memory (MB)"]/preceding-sibling::th)+1]')
        const systemMemoryValue = await systemMemory.textContent()
        console.log("System-Memory", systemMemoryValue);
    })

    test("StaticTable Handel", async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/")
        const mukeshLocator= page.locator('//table[@name="BookTable"]/tbody[1]//tr[5]//td[2]')
        const mukeshValue= await mukeshLocator.textContent()
        console.log(mukeshValue);
    
    })

    test("Master in selenium price value", async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/")

        const priceLocator = page.locator("//table[@name='BookTable']//tr[5]//td[4]")
        const priceValue= await priceLocator.textContent()
        console.log("Selenium-Price--", priceValue);
        
    })
    test("Chrome-Network%",async ({page})=>{
        // chrome network(MBPS)
        //chrome Row = //tr[td[text()="Chrome"]]/td
        //header == //th[text()="Network (Mbps)"]/preceding-sibling::th
        await page.goto("https://testautomationpractice.blogspot.com/")

        const chromeNework = page.locator('//tr[td[text()="Chrome"]]/td[count(//th[text()="Network (Mbps)"]/preceding-sibling::th)+1]')
        const percentageValue= await chromeNework.textContent()
        console.log("Chrome-Network% - ",percentageValue);

    })

})
    

    
    