const fs = require('fs');

function countStudents(path) {
  try {
    // Read file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split into lines and remove empty lines
    const lines = data.split('\n').filter(line => line.trim());
    
    // Remove header line and filter out empty lines
    const students = lines.slice(1).filter(line => line.trim());
    
    // Log total number of students
    console.log(`Number of students: ${students.length}`);
    
    // Create object to store students by field
    const studentsByField = {};
    
    // Process each student
    students.forEach(student => {
      const [firstName, , , field] = student.split(',');
      
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
    });
    
    // Log statistics for each field
    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(
        `Number of students in ${field}: ${students.length}. ` +
        `List: ${students.join(', ')}`
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
