const puppeteer = require("puppeteer");

async function runAutomation() {
	try {
		// Launch a headful browser and go to swap.defillama.com
		const browser = await puppeteer.launch({ headless: false });
		const page = await browser.newPage();
		await page.goto("https://swap.defillama.com");

		// Wait for the input field to be visible and clickable
		await page.waitForSelector("#react-select-2-input");

		// Click on the input field to open the dropdown
		await page.click("#react-select-2-input");

		// Wait for the dropdown options to appear
		await page.waitForSelector("#react-select-2-listbox");

		// Click on the "Arbitrum One" option
		await page.evaluate(() => {
			const option = Array.from(
				document.querySelectorAll("#react-select-2-listbox div")
			).find((div) => div.innerText === "Arbitrum One");
			option.click();
		});

		await page.waitForTimeout(1000); // Adjust the delay if needed

		// Wait for the button to be visible on the page
		await page.waitForSelector("button.chakra-button.css-qjhap");

		// Click on the button
		await page.click("button.chakra-button.css-qjhap");

		// Wait for the token selection modal to appear
		await page.waitForSelector(".chakra-modal__content");

		// Type "USDC" in the search input field
		await page.type(".chakra-input.css-s1d1f4", "USDC");

		// Wait for the search results to update
		await page.waitForTimeout(1000); // Adjust the delay if needed

		// Wait for the elements to be visible on the page
		await page.waitForSelector('div[data-defaultcursor="false"]');

		// Text content of the element you want to click
		const targetText = "USD Coin (USDC)";

		// Click on the element with the target text
		await page.evaluate((targetText) => {
			const findElementByText = (selector, text) => {
				const elements = document.querySelectorAll(selector);
				return Array.from(elements).find(
					(element) => element.textContent.trim() === text
				);
			};

			const element = findElementByText(
				'div[data-defaultcursor="false"]',
				targetText
			);
			if (element) {
				element.click();
			}
		}, targetText);

		// Click on the button
		await page.click("button.chakra-button.css-v1p1bl");

		await page.$eval(".chakra-input", (input) => (input.value = ""));

		// Enter the value "12" in the input box
		await page.type(".chakra-input", "12");

		await page.waitForTimeout(1000); // Adjust the delay if needed

		// Trigger the popup by clicking on the button
		await page.click("button.css-qjhap");

		// Wait for the popup to appear
		await page.waitForSelector(".chakra-modal__content");

		// Type "Wrapped BTC" in the search input field
		await page.type(".chakra-modal__content input", "Wrapped BTC");

		// Wait for the search results to update
		await page.waitForTimeout(1000); // Adjust the delay if needed

		// Click on the first result
		await page.click(".chakra-modal__content .sc-b49748d5-3.cjxQGj");

		await page.waitForTimeout(3000); // Adjust the delay if needed
		try {
			// Wait for the second div element with the specified class to be visible on the page
			await page.waitForSelector(
				"div.sc-18d0abec-0.knYyMy.RouteWrapper:nth-child(2)"
			);

			// Click on the second div element
			await page.click("div.sc-18d0abec-0.knYyMy.RouteWrapper:nth-child(2)");

			// Close the browser
			await browser.close();
		} catch (error) {
			console.error("An error occurred :", error);
		}
	} catch (error) {
		console.error("An error occurred:", error);
	}

	// Leave the browser window open
	// This will keep the browser window open until you manually close it or exit the program
}

runAutomation();
