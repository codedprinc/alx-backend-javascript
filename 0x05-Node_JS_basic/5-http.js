const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const dbPath = process.argv[2];
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    countStudents(dbPath).then((result) => {
      res.end(`This is the list of our students\n${result}`);
    }).catch((error) => {
      res.end(`This is the list of our students\n${error.message}`);
    });
  }
});

app.listen(1245);

module.exports = app;
