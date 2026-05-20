// utils/hooks.js
// Hooks run automatically before/after every scenario
// Great for logging, setting up state, and cleaning up

const { Before, After, AfterAll, setDefaultTimeout } = require("@cucumber/cucumber");

// Give each step 15 seconds before timing out
setDefaultTimeout(15000);

Before(function (scenario) {
  // Reset shared state before each scenario
  this.requestBody = {};
  this.response = null;
  this.responseTime = 0;
  console.log(`\n▶ Starting: ${scenario.pickle.name}`);
});

After(function (scenario) {
  const status = scenario.result.status;
  const icon = status === "PASSED" ? "✅" : "❌";
  console.log(`${icon} Finished: ${scenario.pickle.name} [${status}]`);

  // Log response details on failure — helps with debugging
  if (status === "FAILED" && this.response) {
    console.log(`   Status Code: ${this.response.status}`);
    console.log(`   Response Body: ${JSON.stringify(this.response.data, null, 2)}`);
    console.log(`   Response Time: ${this.responseTime}ms`);
  }
});

AfterAll(function () {
  console.log("\n📊 Test run complete. Check reports/cucumber-report.html for full results.\n");
});