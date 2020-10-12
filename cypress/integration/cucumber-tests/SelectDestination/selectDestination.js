import { Then } from 'cypress-cucumber-preprocessor/steps'
import Destination from '../../../page-objects/pages/DestinationPage'

Then('I see the results', () => {
	Destination.seeResults()
})
