const puppeteer = require(`puppeteer`)

describe(`Mi Primer Prueba abriendo un Navegador`, () => {
	it(`Prueba con Clic en el botón`, async () =>  {
		const browser = await puppeteer.launch({headless: false, slowMo: 500})
 		const page = await browser.newPage()
		await page.goto(`http://automationpractice.com/index.php`)
		const texto = await page.$x("//a[contains(text(), 'Women')]");
		await texto[0].click()
		page.waitForTimeout(8000)
        await page.screenshot({ path: 'texto.png' });
		await browser.close()
	
	})

	it(`Prueba usando CSS`, async () =>  {
		const browser = await puppeteer.launch({headless: false, slowMo: 500})
 		const page = await browser.newPage()
		await page.goto(`http://automationpractice.com/index.php`)
		await page.click("ul>li>a:first-child")
		page.waitForTimeout(8000)
        await page.screenshot({ path: 'css.png' });
		await browser.close()
	
	})

	it(`Prueba usando XPATH`, async () =>  {
		const browser = await puppeteer.launch({headless: false, slowMo: 500})
 		const page = await browser.newPage()
		await page.goto(`http://automationpractice.com/index.php`)
		const xpath = await page.$x("//ul/li/a[@title='Women']");
        await xpath[0].click();
		page.waitForTimeout(8000)
        await page.screenshot({ path: 'xpath.png' });
		await browser.close()
	
	})


})