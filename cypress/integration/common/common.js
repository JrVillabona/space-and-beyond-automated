import { defineStep } from 'cypress-cucumber-preprocessor/steps'
import Hero from '../../page-objects/components/Hero'
import Destination from '../../page-objects/pages/DestinationPage'

defineStep('I want to wait {int} milliseconds', time => {
	cy.wait(time)
})

defineStep('I see {string} in the title', title => {
	cy.title().should('include', title)
})

defineStep('I am on the Space beyond website', () => {
	Hero.visit()
})

defineStep('I search out {string}, {string}, {string}', (depart, adult, child) => {
	Hero.selectDepartingDate(depart)
	Hero.selectAdults(adult)
	Hero.selectChildrens(child)
})

defineStep('I click on Select Destination button', () => {
	Hero.selectDestination()
})

defineStep('I select {string}, {string}, and {string}', (launch, color, price) => {
	Destination.selectLaunch(launch)
	Destination.selectPlanetColor(color)
	Destination.selectPrice(price)
})

defineStep('I book the first result', () => {
	Destination.book()
})
