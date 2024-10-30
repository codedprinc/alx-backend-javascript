const fs = require('fs');

const countStudents = (path) => {
  let data;
  let noOfStudents;
  const studentsInMajor = {};
  try {
    data = fs.readFileSync(path, 'utf8');
    data = data.split('\n');
    data = data.slice(1).filter((line) => line);
    noOfStudents = data.length;

    console.log('Number of students:', noOfStudents);

    for (let i = 0; i < data.length; i += 1) {
      const student = data[i].split(',');
      const major = student.at(-1);
      const firstName = student.at(0);

      if (Object.keys(studentsInMajor).includes(major)) {
        studentsInMajor[major].push(firstName);
      } else {
        studentsInMajor[major] = [firstName];
      }
    }

    Object.entries(studentsInMajor).forEach(([key, students]) => {
      const studentList = students.join(', ');
      console.log(`Number of students in ${key}: ${students.length}. List: ${studentList}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
