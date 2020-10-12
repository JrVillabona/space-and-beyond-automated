import BasePage from '../BasePage'

const LAUNCH_SELECTOR_DROPDOWN = '//input[@value="Launch"]'
const PLANET_COLOR_DROPDOWN = '//input[@value="Planet color"]'
const PROGRESS_BAR = '//div[contains(@class,"2wxLd")]'
const RESULTS = '(//div[contains(@class,"GalleryItem")])'
const BOOK_BUTTON = '(//button[contains(.,"Book")])[1]'

export default class Destination {
	static selectLaunch(launch) {
		cy.xpath(LAUNCH_SELECTOR_DROPDOWN).click()
		cy.xpath(`//li[contains(.,"${launch}")]`).click()
	}

	static selectPlanetColor(color) {
		cy.xpath(PLANET_COLOR_DROPDOWN).click()
		cy.xpath(`//li[contains(.,"${color}")]`).click()
	}

	static selectPrice(price) {
		cy.xpath(PROGRESS_BAR)
			.invoke('attr', 'data-value', price)
			.should('have.attr', 'data-value', price)
	}

	static book() {
		cy.xpath(BOOK_BUTTON).click()
	}

	static seeResults() {
		BasePage.isVisible(RESULTS)
	}
}
