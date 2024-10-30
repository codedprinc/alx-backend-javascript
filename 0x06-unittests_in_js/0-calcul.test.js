const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("Returns 4", () => {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it("Returns 5", () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it("Returns 5", () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it("Returns 6", () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it("Returns 3", () => {
    assert.equal(calculateNumber(0, 3.3), 3);
  });

  it("Returns 2", () => {
    assert.equal(calculateNumber(-1.6, 3.7), 2);
  });

  it("Returns -6", () => {
    assert.equal(calculateNumber(-1.6, -3.7), -6);
  });

  it("Returns -1", () => {
    assert.equal(calculateNumber(1.5, -3.5), -1);
  });
});
