const fs = require('fs').promises;

const readDatabase = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
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
        
        resolve(studentsByField);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default readDatabase;
