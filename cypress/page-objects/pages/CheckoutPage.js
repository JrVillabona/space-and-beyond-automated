const NAME = '(//input[@role="input"])[9]'
const EMAIL = '(//input[@role="input"])[10]'
const SSN = '(//input[@role="input"])[11]'
const PHONE_NUMBER = '(//input[@role="input"])[12]'
const PAY_NOW_BUTTON = '(//button[@type="button"])[5]'
const TERMS_CHECKBOX = '//div[contains(@class,"2B20W")]'

export default class Checkout {
	static completeForm(name, email, ssn, phone) {
		cy.xpath(NAME).type(name)
		cy.xpath(EMAIL).type(email)
		cy.xpath(SSN).type(ssn)
		cy.xpath(PHONE_NUMBER).type(phone)
	}

	static acceptTerms() {
		cy.xpath(TERMS_CHECKBOX).click()
	}
}
