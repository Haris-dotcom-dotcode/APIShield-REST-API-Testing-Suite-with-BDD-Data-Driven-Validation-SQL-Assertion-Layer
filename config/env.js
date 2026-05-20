// config/env.js
// Central config — change baseURL here to point at any API

const config = {
  baseURL: "https://reqres.in/api", // Free test API — no signup needed
  apiKey: "YOUR_API_KEY_HERE",      // Replace with your actual API key
  timeout: 10000,                   // 10 seconds max per request
  responseSLA: 2000,                // Fail if response > 2000ms

  // Database config (optional — leave as-is if not using a local DB)
  db: {
    host: "localhost",
    user: "root",
    password: "yourpassword",
    database: "apishield_db",
    port: 3306
  }
};

module.exports = config;