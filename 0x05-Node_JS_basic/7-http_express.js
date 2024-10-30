const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const dbPath = process.argv[2];
  countStudents(dbPath).then((result) => {
    res.send(`This is the list of our students\n${result}`);
  }).catch((error) => {
    res.send(`This is the list of our students\n${error.message}`);
  });
});

app.listen(1245);

module.exports = app;
