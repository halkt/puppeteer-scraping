import puppeteer from 'puppeteer'
import { formatDate } from './formatDate'
;(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      args: ['--disable-dev-shm-usage', '--no-sandbox'],
    })
    const page = await browser.newPage()
    await page.goto('https://www.google.com/')
    const filePath = `/usr/src/app/screenshot/${formatDate(new Date())}.png`
    await page.screenshot({
      path: filePath,
    })
    await browser.close()
  } catch (e) {
    console.error(e)
  }
})()
