# features/auth.feature
# These are written in plain English (Gherkin syntax)
# Business analysts, developers, and testers can all read this
# This is what BDD looks like in real projects

Feature: User Authentication API
  As a QA Engineer
  I want to validate the authentication endpoints
  So that only valid users can access the system

  Scenario: Successful login with valid credentials
    Given I have valid user credentials
    When I send a POST request to "/login"
    Then the response status should be 200
    And the response should contain a token
    And the response time should be under SLA

  Scenario: Failed login with invalid credentials
    Given I have invalid user credentials
    When I send a POST request to "/login"
    Then the response status should be 400
    And the response should contain an error message

  Scenario: Login response contains required fields
    Given I have valid user credentials
    When I send a POST request to "/login"
    Then the response body should have field "token"
