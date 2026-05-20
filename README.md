# APIShield 🛡️
### BDD API Testing Framework | JavaScript | Cucumber | CI/CD

A production-grade API testing framework built with JavaScript, Cucumber BDD, and GitHub Actions CI/CD.  
Tests the [ReqRes.in](https://reqres.in) REST API — no backend setup required.

---

## 📁 Project Structure

```
apishield/
├── features/              # BDD test scenarios (plain English)
│   ├── auth.feature       # Login / authentication tests
│   └── users.feature      # User CRUD operation tests
├── step-definitions/      # JavaScript code behind each BDD step
│   ├── authSteps.js
│   └── userSteps.js
├── api/
│   └── apiClient.js       # Axios HTTP client wrapper
├── config/
│   └── env.js             # Base URL, timeouts, SLA thresholds
├── test-data/
│   └── users.js           # Centralized test data
├── utils/
│   └── hooks.js           # Before/After scenario hooks
├── reports/               # Generated HTML reports (auto-created)
├── .github/workflows/     # GitHub Actions CI pipeline
└── cucumber.js            # Cucumber configuration
```

---

## ⚙️ Setup (First Time Only)

```bash
# 1. Install all dependencies
npm install
```

---

## ▶️ Run Tests

```bash
# Run full test suite
npm test

# What you'll see:
# ✅ Each passing scenario
# ❌ Each failing scenario with response details
# 📊 HTML report generated at reports/cucumber-report.html
```

---

## 📊 View the Report

After running tests, open this file in your browser:
```
reports/cucumber-report.html
```

---

## 🚀 CI/CD

Every push to GitHub automatically triggers the full test suite via GitHub Actions.  
Results are uploaded as a downloadable artifact in the Actions tab.

---

## 🧠 Key Concepts Used

| Concept | Tool | Why It Matters |
|---|---|---|
| BDD | Cucumber + Gherkin | Business-readable test scenarios |
| API Testing | Axios | HTTP request/response validation |
| Assertions | Chai | Readable expect() assertions |
| Response SLA | Custom | Catches performance regressions |
| CI/CD | GitHub Actions | Automated test runs on every push |
| Reporting | Cucumber HTML | Visual pass/fail dashboard |

---

## 📌 Resume Bullet Points

- Built a BDD API testing framework using Cucumber JS + Axios covering 9 scenarios across Auth and User CRUD endpoints
- Implemented response time SLA assertions catching latency regressions on every test run
- Integrated CI/CD via GitHub Actions — full suite runs automatically on every push with artifact report upload
- Centralized test data and configuration for easy environment switching (dev/staging/prod)
