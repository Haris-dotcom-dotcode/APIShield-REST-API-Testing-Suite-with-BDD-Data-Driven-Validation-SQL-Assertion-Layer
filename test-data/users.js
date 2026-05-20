// test-data/users.js
// All test data lives here — keeping it separate from test logic
// In real projects this would come from Excel or a database

const users = {
  validUser: {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  },
  invalidUser: {
    email: "invalid@notreal.com",
    password: "wrongpassword"
  },
  newUser: {
    name: "Ahmad Raza",
    job: "QA Engineer"
  },
  updatedUser: {
    name: "Ahmad Raza",
    job: "Senior QA Engineer"
  }
};

module.exports = users;