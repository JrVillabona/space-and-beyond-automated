import BasePage from '../BasePage'
import Calendar from '../components/Calendar'
const HERO_SECTION = '//section[@class="Hero__hero___1FDXn"]'
const DEPARTING = '(//input[@role="input"])[1]'
const ADULTS_DROPDOWN = '//input[@value="Adults (18+)"]'
const CHILDRENS_DROPDOWN = '//input[@value="Children (0-7)"]'
const SELECT_DESTINATION_BUTTON = '//button[contains(.,"Select Destination")]'

export default class Hero extends BasePage {
	static visit() {
		cy.visit('/')
	}
	static heroIsVisible() {
		BasePage.isVisible(HERO_SECTION)
	}

	static selectDepartingDate(day) {
		cy.xpath(DEPARTING).click()
		Calendar.selectDay(day)
		Calendar.confirmDate()
	}

	static selectAdults(adults) {
		cy.xpath(ADULTS_DROPDOWN).click()
		cy.xpath(`(//li[contains(.,'${adults}')])[1]`)
	}

	static selectChildrens(childrens) {
		cy.xpath(CHILDRENS_DROPDOWN).click()
		cy.xpath(`(//li[contains(.,"${childrens}")])[2]`).click()
	}

	static selectDestination() {
		cy.xpath(SELECT_DESTINATION_BUTTON).click()
	}
}
