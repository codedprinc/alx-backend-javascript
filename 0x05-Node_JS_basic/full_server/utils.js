const fs = require('fs').promises;

// Use a default export as per ESLint's preference for single export modules
const readDatabase = (path) => fs.readFile(path, 'utf8')
  .then((data) => {
    const lines = data.split('\n');
    const studentsData = lines.slice(1).filter((line) => line);
    const studentsByField = {};

    studentsData.forEach((student) => {
      const [firstName, , , field] = student.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstName);
    });

    return studentsByField;
  })
  .catch((error) => {
    throw error;
  });

export default readDatabase;
