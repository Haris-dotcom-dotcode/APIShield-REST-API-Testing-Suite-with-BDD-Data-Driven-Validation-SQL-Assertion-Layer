// step-definitions/userSteps.js

const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const api = require("../api/apiClient");
const users = require("../test-data/users");
const config = require("../config/env");

Given("I have new user data", function () {
  this.requestBody = users.newUser;
});

Given("I have updated user data", function () {
  this.requestBody = users.updatedUser;
});

When("I send a GET request to {string}", async function (endpoint) {
  try {
    this.response = await api.get(endpoint);
  } catch (error) {
    this.response = error.response;
  }
  this.responseTime = api.getLastResponseTime();
});

When("I send a PUT request to {string}", async function (endpoint) {
  try {
    this.response = await api.put(endpoint, this.requestBody);
  } catch (error) {
    this.response = error.response;
  }
  this.responseTime = api.getLastResponseTime();
});

When("I send a DELETE request to {string}", async function (endpoint) {
  try {
    this.response = await api.del(endpoint);
  } catch (error) {
    this.response = error.response;
  }
  this.responseTime = api.getLastResponseTime();
});

Then("the response should contain a list of users", function () {
  expect(this.response.data).to.have.property("data");
  expect(this.response.data.data).to.be.an("array").and.not.empty;
});

Then("each user should have fields {string}, {string}, {string}, {string}", function (f1, f2, f3, f4) {
  const userList = this.response.data.data;
  userList.forEach((user) => {
    expect(user).to.have.property(f1);
    expect(user).to.have.property(f2);
    expect(user).to.have.property(f3);
    expect(user).to.have.property(f4);
  });
});

Then("the response should contain the created user details", function () {
  expect(this.response.data).to.have.property("name", users.newUser.name);
  expect(this.response.data).to.have.property("job", users.newUser.job);
  expect(this.response.data).to.have.property("id");       // auto-generated
  expect(this.response.data).to.have.property("createdAt"); // timestamp
});

Then("the response should contain the updated user details", function () {
  expect(this.response.data).to.have.property("name", users.updatedUser.name);
  expect(this.response.data).to.have.property("job", users.updatedUser.job);
  expect(this.response.data).to.have.property("updatedAt");
});