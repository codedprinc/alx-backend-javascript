const sinon = require("sinon");

describe("Database tests", () => {
    let dbConnection;

    before(() => {
        console.log("Setting up database connection...");
        dbConnection = {connected: true};
    })

    beforeEach(() => {
        console.log("Setting up before each test...");
        dbConnection.testData = {
            name: "Peter",
            age: 25
        }
    })

    it("should verify data is initialized correctly", () => {
        console.log("Running test for data initialization");
        sinon.assert.match(dbConnection.testData, {name: "Peter", age: 25})
    })

    afterEach(() => {
        console.log("Cleaning after each test");
        delete dbConnection.testData;
    })

    after(() => {
        console.log("Tearing down");
        dbConnection.connected = false;
    })
})