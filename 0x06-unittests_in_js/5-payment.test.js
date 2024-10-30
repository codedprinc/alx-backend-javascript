const Utils = require("./utils");
const sinon = require("sinon");
const assert = require("assert");
const sendPaymentRequestToApi = require("./5-payment");

describe("calculateNumber", () => {
  let logSpy;

  beforeEach(() => {
    logSpy = sinon.spy(console, "log");
  });

  it("should log the correct message", () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(logSpy, "The total is: 120");
    sinon.assert.calledOnce(logSpy);
  });

  it("should log the correct message", () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(logSpy, "The total is: 20");
    sinon.assert.calledOnce(logSpy);
  });

  afterEach(() => {
    logSpy.restore();
  });
});
