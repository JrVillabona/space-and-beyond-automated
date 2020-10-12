Feature: Complete Checkout

  As an Space beyond user
  I fill out the form
  In order to complete the checkout

  Background:
    Given I am on the Space beyond website
    And I search out "22", "2", "3"
    And I click on Select Destination button
    And I select "Tongli", "Blue", and "1200"
    Then I book the first result

  Scenario Outline: Complete the checkout
    Then Fill the form with "<name>", "<email>", "<ssn>", "<phone>"
    And Check the terms

    Examples:
      | name             | email               | ssn         | phone       |
      | Julian Villabona | jvillabona@test.com | 123-13-1231 | 12312312313 |