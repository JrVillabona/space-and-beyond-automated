# Space Beyond E2E Test

## The test has been done with Javascript, Cypress.io & Cucumber (BDD Framework)

Concept for Automation functional testing using Javascript, Cypress.io and Cucumber. It shows any of solutions for automation test suite for Space Beyond website (http://demo.testim.io/). Javascript is the language used to write the test code.

Cucumber, along with Gherkin, is the testing framework. Gherkin is the business language used to write the tests in a “human readable” way. Cucumber helps capture test results as well.

Cypress is a next generation front end testing tool built for the modern web. Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium. This enables you to write faster, easier and more reliable tests.

## Installation

First of all you need to have [NodeJS](https://nodejs.org/es/), [Chrome](https://www.google.es/chrome/index.html) browser and [Git](https://git-scm.com/download) installed. Once you have them, in order to install the tests, follow the next steps from terminal:

Clone the repository project:

```
git clone https://github.com/JrVillabona/space-and-beyond-automated.git
cd space-and-beyond-automated
```

Install the dependencies:

```
npm install
```

## Execution

In order to execute the tests, you just need to execute the following commands.

If you prefer in headless mode:

```
npm run test
```

Or if you want to perform with the Cypress console:

```
npm run cypress:open
```

Then select whether you want to run a particular feature or if you prefer to run all the features. Select the browser in which you want to run the tests, remember that Cypress supports Chrome, Edge, Firefox and Electron. After that, click on **Run all specs**.
Note: Excluding Electron, any browser you want to run Cypress tests in needs to be installed on your local system.

## Generals

- In the folder `cypress/integration` there are two folders:
  `cypress/integration/common` contains the steps that are common and used in various features.
  `cypress/integration/cucumber-tests` contains the features that uses descriptive names (.features) and the folders with each of the steps. Besides, each .feature contains different scenarios.
- In file `cypress.json` there are config vars.
- In file `cypress/page-objects` there are page of project.

In the case of Gherkin, Background was used in some tests, and in others the use of Before with the help of tags.

## Features with their respective scenarios:

1. As an Space beyond user
   I fill out the form
   In order to complete the checkout
   
   Scenario: Complete the checkout

- **CompleteCheckout.feature**

2. As an Space beyond user
   I want to search with different filters
   In order to book a destination properly
   
   Scenario: Make a search
   Scenario: Filter by Launch, Planet color and Price

- **SelectDestination.feature**

## Documentation

- Cypress: https://www.cypress.io/
- Cypress-Cucumber-Preprocessor : https://www.npmjs.com/package/cypress-cucumber-preprocessor
