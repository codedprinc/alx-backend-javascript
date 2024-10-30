const sinon = require("sinon")

const multiply = (a, b) => a * b;

const multiplySpy = sinon.spy(multiply);

multiplySpy(4, 5)
multiplySpy(5, 6)

sinon.assert.called(multiplySpy)
sinon.assert.calledWith(multiplySpy, 4, 5)

console.log(multiplySpy.returnValues);
console.log(multiplySpy.called)
