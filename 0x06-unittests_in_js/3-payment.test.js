const Utils = require("./utils");
const sinon = require("sinon");
const assert = require("assert");
const sendPaymentRequestToApi = require("./3-payment");

const UtilsSpy = sinon.spy(Utils, "calculateNumber");

describe("calculateNumber", () => {
  it("should do the correct calculation based on type", () => {
    assert.equal(UtilsSpy("SUM", 100, 200), sendPaymentRequestToApi(100, 200));
    UtilsSpy.restore();
  });
});
