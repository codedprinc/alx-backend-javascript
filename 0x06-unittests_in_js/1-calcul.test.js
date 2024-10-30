const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  it("Returns 4", () => {
    assert.equal(calculateNumber("SUM", 1, 3), 4);
  });

  it("Returns 0.25", () => {
    assert.equal(calculateNumber("DIVIDE", 1, 4), 0.25);
  });

  it("Returns -2", () => {
    assert.equal(calculateNumber("SUBTRACT", 1, 3), -2);
  });

  it("Returns 5", () => {
    assert.equal(calculateNumber("SUM", 1, 3.7), 5);
  });

  it("Returns 0.25", () => {
    assert.equal(calculateNumber("DIVIDE", 1, 3.7), 0.25);
  });

  it("Returns -3", () => {
    assert.equal(calculateNumber("SUBTRACT", 1, 3.7), -3);
  });

  it("Returns 5", () => {
    assert.equal(calculateNumber("SUM", 1.2, 3.7), 5);
  });

  it("Returns 0.25", () => {
    assert.equal(calculateNumber("DIVIDE", 1.2, 3.7), 0.25);
  });

  it("Returns -3", () => {
    assert.equal(calculateNumber("SUBTRACT", 1.2, 3.7), -3);
  });

  it("Returns 6", () => {
    assert.equal(calculateNumber("SUM", 1.5, 3.7), 6);
  });

  it("Returns 0.5", () => {
    assert.equal(calculateNumber("DIVIDE", 1.5, 3.7), 0.5);
  });

  it("Returns -2", () => {
    assert.equal(calculateNumber("SUBTRACT", 1.5, 3.7), -2);
  });

  it("Returns 3", () => {
    assert.equal(calculateNumber("SUM", 0, 3.3), 3);
  });

  it("Returns 0", () => {
    assert.equal(calculateNumber("DIVIDE", 0, 3.3), 0);
  });

  it("Returns -3", () => {
    assert.equal(calculateNumber("SUBTRACT", 0, 3.3), -3);
  });

  it("Returns 2", () => {
    assert.equal(calculateNumber("SUM", -1.6, 3.7), 2);
  });

  it("Returns -0.5", () => {
    assert.equal(calculateNumber("DIVIDE", -1.6, 3.7), -0.5);
  });

  it("Returns -6", () => {
    assert.equal(calculateNumber("SUBTRACT", -1.6, 3.7), -6);
  });

  it("Returns -6", () => {
    assert.equal(calculateNumber("SUM", -1.6, -3.7), -6);
  });

  it("Returns 0.5", () => {
    assert.equal(calculateNumber("DIVIDE", -1.6, -3.7), 0.5);
  });

  it("Returns 2", () => {
    assert.equal(calculateNumber("SUBTRACT", -1.6, -3.7), 2);
  });

  it("Returns -1", () => {
    assert.equal(calculateNumber("SUM", 1.5, -3.5), -1);
  });

  it("Returns -1", () => {
    assert.equal(calculateNumber("DIVIDE", 2.5, -3.5), -1);
  });

  it("Returns 6", () => {
    assert.equal(calculateNumber("SUBTRACT", 1.5, -3.5), 5);
  });

  it("Returns -1", () => {
    assert.equal(calculateNumber("DIVIDE", 1.5, 0), "Error");
  });
});
