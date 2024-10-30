const calculateNumber = require("./2-calcul_chai");
const { expect } = require("chai");

describe("calculateNumber", () => {
  it("Returns 4", () => {
    expect(calculateNumber("SUM", 1, 3)).to.equal(4);
  });

  it("Returns 0.25", () => {
    expect(calculateNumber("DIVIDE", 1, 4)).to.equal(0.25);
  });

  it("Returns -2", () => {
    expect(calculateNumber("SUBTRACT", 1, 3)).to.equal(-2);
  });

  it("Returns 5", () => {
    expect(calculateNumber("SUM", 1, 3.7)).to.equal(5);
  });

  it("Returns 0.25", () => {
    expect(calculateNumber("DIVIDE", 1, 3.7)).to.equal(0.25);
  });

  it("Returns -3", () => {
    expect(calculateNumber("SUBTRACT", 1, 3.7)).to.equal(-3);
  });

  it("Returns 5", () => {
    expect(calculateNumber("SUM", 1.2, 3.7)).to.equal(5);
  });

  it("Returns 0.25", () => {
    expect(calculateNumber("DIVIDE", 1.2, 3.7)).to.equal(0.25);
  });

  it("Returns -3", () => {
    expect(calculateNumber("SUBTRACT", 1.2, 3.7)).to.equal(-3);
  });

  it("Returns 6", () => {
    expect(calculateNumber("SUM", 1.5, 3.7)).to.equal(6);
  });

  it("Returns 0.5", () => {
    expect(calculateNumber("DIVIDE", 1.5, 3.7)).to.equal(0.5);
  });

  it("Returns -2", () => {
    expect(calculateNumber("SUBTRACT", 1.5, 3.7)).to.equal(-2);
  });

  it("Returns 3", () => {
    expect(calculateNumber("SUM", 0, 3.3)).to.equal(3);
  });

  it("Returns 0", () => {
    expect(calculateNumber("DIVIDE", 0, 3.3)).to.equal(0);
  });

  it("Returns -3", () => {
    expect(calculateNumber("SUBTRACT", 0, 3.3)).to.equal(-3);
  });

  it("Returns 2", () => {
    expect(calculateNumber("SUM", -1.6, 3.7)).to.equal(2);
  });

  it("Returns -0.5", () => {
    expect(calculateNumber("DIVIDE", -1.6, 3.7)).to.equal(-0.5);
  });

  it("Returns -6", () => {
    expect(calculateNumber("SUBTRACT", -1.6, 3.7)).to.equal(-6);
  });

  it("Returns -6", () => {
    expect(calculateNumber("SUM", -1.6, -3.7)).to.equal(-6);
  });

  it("Returns 0.5", () => {
    expect(calculateNumber("DIVIDE", -1.6, -3.7)).to.equal(0.5);
  });

  it("Returns 2", () => {
    expect(calculateNumber("SUBTRACT", -1.6, -3.7)).to.equal(2);
  });

  it("Returns -1", () => {
    expect(calculateNumber("SUM", 1.5, -3.5)).to.equal(-1);
  });

  it("Returns -1", () => {
    expect(calculateNumber("DIVIDE", 2.5, -3.5)).to.equal(-1);
  });

  it("Returns 5", () => {
    expect(calculateNumber("SUBTRACT", 1.5, -3.5)).to.equal(5);
  });

  it("Returns -1", () => {
    expect(calculateNumber("DIVIDE", 1.5, 0)).to.equal("Error");
  });
});
