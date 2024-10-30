const fs = require('fs');

function countStudents(path) {
  try {
    // Read file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split into lines and remove empty lines
    const lines = data.split('\n').filter(line => line.trim());
    
    // Remove header line
    const students = lines.slice(1);
    
    // Log total number of students
    console.log(`Number of students: ${students.length}`);
    
    // Create object to store students by field
    const studentsByField = {
      CS: [],
      SWE: []
    };
    
    // Process each student
    students.forEach(student => {
      const [firstName, , , field] = student.split(',');
      if (field) {
        studentsByField[field].push(firstName);
      }
    });
    
    // Log statistics for each field in the exact format expected by tests
    for (const field in studentsByField) {
      const students = studentsByField[field];
      if (students.length > 0) {
        console.log(
          `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
        );
      }
    }
    
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
