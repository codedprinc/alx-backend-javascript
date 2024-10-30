const sinon = require("sinon");

describe("Logging func", () => {
    it("Should log the correct message", () => {
        const consoleSpy = sinon.spy(console, "log")

        function logMessage(message) {
            console.log(message);
        }

        logMessage("Hello, world!");

        sinon.assert.calledWith(consoleSpy, "Hello, world!");

        consoleSpy.restore()
    })
})
