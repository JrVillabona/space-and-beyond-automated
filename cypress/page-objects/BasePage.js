export default class BasePage {
	static pause(ms) {
		cy.wait(ms)
	}

	static logInfo(message) {
		cy.log(message)
	}

	static isVisible(selector) {
		cy.xpath(selector).should('be.visible')
	}

	static isNotVisible(selector) {
		cy.xpath(selector).should('not.be.visible')
	}
}
