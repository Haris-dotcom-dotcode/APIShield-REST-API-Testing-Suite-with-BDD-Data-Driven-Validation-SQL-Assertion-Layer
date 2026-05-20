# features/users.feature

Feature: Users API - CRUD Operations
  As a QA Engineer
  I want to validate all user management endpoints
  So that user data is created, read, updated, and deleted correctly

  Scenario: Get list of users returns correct structure
    When I send a GET request to "/users?page=1"
    Then the response status should be 200
    And the response should contain a list of users
    And each user should have fields "id", "email", "first_name", "last_name"
    And the response time should be under SLA

  Scenario: Get a single user that exists
    When I send a GET request to "/users/2"
    Then the response status should be 200
    And the response body should have field "data"

  Scenario: Get a user that does not exist
    When I send a GET request to "/users/9999"
    Then the response status should be 404

  Scenario: Create a new user successfully
    Given I have new user data
    When I send a POST request to "/users"
    Then the response status should be 201
    And the response should contain the created user details
    And the response time should be under SLA

  Scenario: Update an existing user
    Given I have updated user data
    When I send a PUT request to "/users/2"
    Then the response status should be 200
    And the response should contain the updated user details

  Scenario: Delete a user
    When I send a DELETE request to "/users/2"
    Then the response status should be 204
