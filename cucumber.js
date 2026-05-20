module.exports = {
  default: {
    features: ["features/**/*.feature"],
    require: ["step-definitions/**/*.js", "utils/hooks.js"],
    format: [
      "progress-bar",
      "json:reports/cucumber-report.json",
      "html:reports/cucumber-report.html"
    ],
    formatOptions: { snippetInterface: "async-await" },
    publishQuiet: true
  }
};