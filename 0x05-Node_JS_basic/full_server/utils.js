const fs = require('fs');

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const studentsByField = {};
        
        lines.slice(1).forEach((line) => {
          const [firstName, , , field] = line.split(',');
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstName);
        });

        resolve(studentsByField);
      }
    });
  });
};

export default readDatabase;
