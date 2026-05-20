// api/apiClient.js
// A simple wrapper around axios so all requests go through one place.
// This means if the base URL changes, you only update config/env.js

const axios = require("axios");
const config = require("../config/env");

const client = axios.create({
  baseURL: config.baseURL,
  timeout: config.timeout,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": config.apiKey        // sends key with every request
  }
});

// Store the last response time for SLA assertions
let lastResponseTime = 0;

async function get(endpoint, headers = {}) {
  const start = Date.now();
  const response = await client.get(endpoint, { headers });
  lastResponseTime = Date.now() - start;
  return response;
}

async function post(endpoint, body, headers = {}) {
  const start = Date.now();
  const response = await client.post(endpoint, body, { headers });
  lastResponseTime = Date.now() - start;
  return response;
}

async function put(endpoint, body, headers = {}) {
  const start = Date.now();
  const response = await client.put(endpoint, body, { headers });
  lastResponseTime = Date.now() - start;
  return response;
}

async function del(endpoint, headers = {}) {
  const start = Date.now();
  const response = await client.delete(endpoint, { headers });
  lastResponseTime = Date.now() - start;
  return response;
}

function getLastResponseTime() {
  return lastResponseTime;
}

module.exports = { get, post, put, del, getLastResponseTime };