// const assert = require("assert");

// describe("Array", () => {
//     it("Should return -1 when value is not present", () => {
//         assert.equal([1,2,3].indexOf(4), -1);
//     });
//     it("Should return correct array length", () => {
//         assert.equal([1,2,3].length, 3);
//     })
//     it("", () => {
//         assert.equal([1,2,3].includes(3), true);
//     })
// })

// CHAI

const chai = require("chai");
const expect = chai.expect;

describe("Strings", () => {
    it("Should have length 5", () => {
        expect("hello").to.have.lengthOf(5);
    })
})