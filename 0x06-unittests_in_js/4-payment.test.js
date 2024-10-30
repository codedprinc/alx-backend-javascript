const Utils = require("./utils");
const sinon = require("sinon");
const assert = require("assert");
const sendPaymentRequestToApi = require("./4-payment");
const { log } = require("console");

const UtilsStub = sinon.stub(Utils, "calculateNumber").returns(10);

describe("calculateNumber", () => {
  it("should log the correct message", () => {
    assert.equal(UtilsStub("SUM", 100, 200), 10);

    const logSpy = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 200);

    sinon.assert.calledWith(logSpy, "The total is: 10");
    UtilsStub.restore();
    logSpy.restore();
  });
});
