Feature: Select Destination

  As an Space beyond user
  I want to search with different filters
  In order to book a destination properly

  Background:
    Given I am on the Space beyond website
    And I search out "22", "2", "3"
    When I click on Select Destination button

  Scenario: Make a search
    Then I can see the results

  Scenario: Filter by Launch, Planet color and Price
    And I select "Tongli", "Blue", and "1200"
    Then I book the first result
