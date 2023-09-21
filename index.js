const express = require('express')
const puppeteer = require('puppeteer')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
	const run = async () => {
		// Launch the browser and open a new blank page
		const browser = await puppeteer.launch({ headless: false })
		const page = await browser.newPage()

		// Navigate the page to a URL
		await page.goto('http://1wqiod.top/bets/home')
	}

	run()
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
