const expect = require("chai").expect;
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
  it("Should return correct token from API", (done) => {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.equal({ data: "Successful response from the API" });
    });
    done();
  });

  it("Should return nothing", () => {
    expect(getPaymentTokenFromAPI(false)).to.equal(undefined);
  })
});
