import fs from 'fs';

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    const students = lines.slice(1);
    
    console.log(`Number of students: ${students.length}`);
    
    const studentsByField = {};
    
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',').map((item) => item.trim());
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });
    
    Object.entries(studentsByField).forEach(([field, fieldStudents]) => {
      console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`);
    });
    
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export default countStudents;
