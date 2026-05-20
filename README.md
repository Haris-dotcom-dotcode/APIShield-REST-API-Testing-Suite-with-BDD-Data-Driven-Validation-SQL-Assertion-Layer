# APIShield

BDD API testing framework built with Cucumber JS + Axios.
Covers authentication and user CRUD endpoints with 9 scenarios,
response time SLA assertions, and automated failure logging.
CI/CD via GitHub Actions runs the full suite on every push.

---

## Requirements

- Node.js        -> https://nodejs.org
- VS Code        -> https://code.visualstudio.com
- A free API key -> https://app.reqres.in/api-keys

---

## Setup

### Step 1 — Download the project

    Go to the GitHub repo
    Click the green Code button
    Click Download ZIP
    Extract it somewhere on your PC

### Step 2 — Install Node.js

    Go to https://nodejs.org
    Download and install it
    This is required to run the project

### Step 3 — Open in VS Code

    Open VS Code
    File -> Open Folder
    Select the extracted project folder

### Step 4 — Open the terminal

    Press Ctrl + ~ inside VS Code

### Step 5 — Install dependencies

    npm install

    Wait for it to finish.
    You will see a node_modules folder appear.

### Step 6 — Add your API key

    Go to https://app.reqres.in/api-keys
    Sign up for free and copy your key
    Open config/env.js
    Replace the placeholder with your key:

        apiKey: "paste_your_key_here"

### Step 7 — Run the tests

    npm test

    You will see each scenario run one by one.
    Green check = passed. Red cross = failed.

### Step 8 — View the report

    Open this file in your browser:

        reports/cucumber-report.html

    This shows the full visual test report.

---

## What gets tested

    POST /login       -> valid credentials return a token
    POST /login       -> invalid credentials return an error
    GET  /users       -> returns a list of users with correct fields
    GET  /users/2     -> returns a single user
    GET  /users/9999  -> returns 404 for a user that does not exist
    POST /users       -> creates a new user
    PUT  /users/2     -> updates an existing user
    DELETE /users/2   -> deletes a user

---

## Tech Stack

    Cucumber JS     -> BDD test framework
    Axios           -> HTTP client
    Chai            -> Assertions
    GitHub Actions  -> CI/CD pipeline

---

## Project Structure

    apishield/
    |
    |-- features/               # BDD test scenarios (plain English)
    |   |-- auth.feature
    |   |-- users.feature
    |
    |-- step-definitions/       # JavaScript code behind each step
    |   |-- authSteps.js
    |   |-- userSteps.js
    |
    |-- api/
    |   |-- apiClient.js        # Axios HTTP wrapper
    |
    |-- config/
    |   |-- env.js              # Base URL, API key, timeouts
    |
    |-- test-data/
    |   |-- users.js            # All test input data
    |
    |-- utils/
    |   |-- hooks.js            # Before/After scenario hooks
    |
    |-- reports/                # Generated HTML report (auto-created)
    |-- .github/workflows/      # GitHub Actions CI pipeline
    |-- cucumber.js             # Cucumber config
    |-- package.json            # Project dependencies
