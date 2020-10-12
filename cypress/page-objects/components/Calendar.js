const OK_BUTTON = '//button[contains(.,"Ok")]'

export default class Calendar {
	static selectDay(day) {
		cy.xpath(`(//span[contains(.,"${day}")])[2]`).click()
	}

	static confirmDate() {
		cy.xpath(OK_BUTTON).click()
	}
}
