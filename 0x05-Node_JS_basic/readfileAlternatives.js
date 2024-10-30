// Alternative 1
const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8').trim().split('\n').slice(1);
    const studentsInMajor = {};

    console.log('Number of students:', data.length);

    data.forEach((row) => {
      const [firstName, , , major] = row.split(',');
      if (!studentsInMajor[major]) studentsInMajor[major] = [];
      studentsInMajor[major].push(firstName);
    });

    Object.entries(studentsInMajor).forEach(([major, students]) => {
      console.log(`Number of students in ${major}: ${students.length}. List: ${students.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;


// Alternative 2
const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    
    // Split file content into lines
    const lines = data.split('\n');
    
    if (lines.length <= 1) {
      throw new Error('No valid student data found');
    }

    // Remove header line (first line)
    const studentsData = lines.slice(1).filter(line => line); // Filtering out empty lines

    console.log(`Number of students: ${studentsData.length}`);

    const studentsByField = {};

    // Iterate over the student data
    studentsData.forEach((line) => {
      const [firstName, , , field] = line.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
    });

    // Log the result for each field
    Object.entries(studentsByField).forEach(([field, students]) => {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
