const fs = require('fs').promises;

const countStudents = (path) => new Promise(async (resolve, reject) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n');
    let result = '';

    const studentsData = lines.slice(1).filter((line) => line);

    console.log(`Number of students: ${studentsData.length}`);
    result += `Number of students: ${studentsData.length}\n`

    const studentsByField = {};

    studentsData.forEach((student) => {
      const [firstName, , , field] = student.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstName);
    });

    Object.entries(studentsByField).forEach(([field, students]) => {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`
    });
    resolve(result);
  } catch (error) {
    reject(new Error('Cannot load the database'));
  }
});

module.exports = countStudents;
