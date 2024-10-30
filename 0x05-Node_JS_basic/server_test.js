const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");

        res.end("Hello world!\n");
    } else if (req.url === "/about") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("About page")
    } else if (req.url === "/test") {
        res.statusCode = 200;

        res.setHeader("Content-Type", "application/json")

        const data = {
            message: "Hello world",
            status: "success"
        }
        res.end(JSON.stringify(data))
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Page not found");
    }
})

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000/")
})
