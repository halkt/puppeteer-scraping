import puppeteer from 'puppeteer'
import { RAKUTEN_SHOKEN_LOGIN_ID, RAKUTEN_SHOKEN_LOGIN_PW } from './consts'
import { formatDate } from './formatDate'
import { slackNotifier } from './slackNotifier'
;(async () => {
  try {
    const targetUrl = 'https://www.rakuten-sec.co.jp/ITS/V_ACT_Login.html'
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      args: ['--disable-dev-shm-usage', '--no-sandbox'],
    })
    const page = await browser.newPage()

    // 楽天証券のログイン処理
    await page.goto(targetUrl)
    await page.type('#form-login-id', RAKUTEN_SHOKEN_LOGIN_ID)
    await page.type('#form-login-pass', RAKUTEN_SHOKEN_LOGIN_PW)
    page.click('#login-btn')
    await page.waitForNavigation({
      waitUntil: 'domcontentloaded',
    })
    page.waitForTimeout(4000)

    // スクリーンショット取得
    const filePath = `/usr/src/app/screenshot/${formatDate(new Date())}.png`
    await page.screenshot({
      path: filePath,
    })

    // 合計金額取得
    const price = await page.$eval(
      '#asset_total_asset > span:nth-child(1) > nobr',
      (item) => {
        return item.textContent
      }
    )
    // 評価損益
    const diffPrice = await page.$eval(
      '#asset_total_asset_diff > span:nth-child(1) > nobr > span',
      (item) => {
        return item.textContent
      }
    )
    const message = `資産合計: ${price}\n評価損益: ${diffPrice?.trim()}`
    console.log(message)

    slackNotifier(message)
    await browser.close()
  } catch (e) {
    console.error(e)
  }
})()
