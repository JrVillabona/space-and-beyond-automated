import { Then } from 'cypress-cucumber-preprocessor/steps'
import Checkout from '../../../page-objects/pages/CheckoutPage'

Then('Fill the form with {string}, {string}, {string}, {string}', (name, email, ssn, phone) => {
	Checkout.completeForm(name, email, ssn, phone)
})

Then('Check the terms', () => {
	Checkout.acceptTerms()
})
