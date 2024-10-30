const app = require("./api");
// const request = require("supertest");

// describe("Integration Test for API", () => {
//   it("Should return 200 OK with correct message", (done) => {
//     request(app)
//       .get("/")
//       .expect(200)
//       .expect("Welcome to the payment system", done);
//   });
// });

const request = require("request");
const assert = require("assert");

describe("Integration Test for API", () => {
  it("Should return 200 OK with correct message", (done) => {
    request.get("http://localhost:7865/", (error, response, body) => {
      assert.strictEqual(response.statusCode, 200);
      assert.strictEqual(body, "Welcome to the payment system");
      done();
    });
  });
});
