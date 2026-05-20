// step-definitions/authSteps.js
// Each "Given / When / Then" line in the .feature file maps to a function here

const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const api = require("../api/apiClient");
const users = require("../test-data/users");
const config = require("../config/env");

// Shared state within a scenario — stored on 'this' via World object
// Cucumber gives each scenario its own context automatically

Given("I have valid user credentials", function () {
  this.requestBody = users.validUser;
});

Given("I have invalid user credentials", function () {
  this.requestBody = users.invalidUser;
});

When("I send a POST request to {string}", async function (endpoint) {
  try {
    this.response = await api.post(endpoint, this.requestBody);
  } catch (error) {
    // axios throws on 4xx/5xx — we catch it to still assert status codes
    this.response = error.response;
  }
  this.responseTime = api.getLastResponseTime();
});

Then("the response status should be {int}", function (expectedStatus) {
  expect(this.response.status).to.equal(expectedStatus);
});

Then("the response should contain a token", function () {
  expect(this.response.data).to.have.property("token");
  expect(this.response.data.token).to.be.a("string").and.not.empty;
});

Then("the response should contain an error message", function () {
  expect(this.response.data).to.have.property("error");
});

Then("the response time should be under SLA", function () {
  expect(this.responseTime).to.be.lessThan(
    config.responseSLA,
    `Response took ${this.responseTime}ms — exceeds SLA of ${config.responseSLA}ms`
  );
});

Then("the response body should have field {string}", function (field) {
  expect(this.response.data).to.have.property(field);
});