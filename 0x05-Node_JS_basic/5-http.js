import http from 'http';
import { promises as fs } from 'fs';

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    const students = lines.slice(1);
    
    let output = `Number of students: ${students.length}\n`;
    
    const studentsByField = {};
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',').map((item) => item.trim());
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });
    
    Object.entries(studentsByField).forEach(([field, fieldStudents]) => {
      output += `Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}\n`;
    });
    
    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const output = await countStudents(process.argv[2]);
      res.end(`This is the list of our students\n${output}`);
    } catch (error) {
      res.end(`This is the list of our students\n${error.message}`);
    }
  }
});

app.listen(1245);

export default app;
