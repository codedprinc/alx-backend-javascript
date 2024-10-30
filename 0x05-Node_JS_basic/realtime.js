const nodemon = require("nodemon");

process.stdin.setEncoding("utf-8");

process.stdin.on("data", (data) => {
    console.log(data);
    process.exit();
})

// Reading from an input
let inputData = "";

process.stdin.on("data", (chunk) => {
    inputData += chunk;
})

process.stdin.on("end", () => {
    console.log(inputData)
})
