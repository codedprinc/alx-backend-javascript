const fs = require('fs').promises;

export const readDatabase = (path) => new Promise(async (resolve, reject) => {
  try {
    const data = await fs.readFile(path, 'utf8');

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

    resolve(studentsByField);
  } catch (error) {
    reject(error);
  }
});
