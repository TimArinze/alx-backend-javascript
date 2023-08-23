const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(Error('Cannot load the database'));
    } else {
      const rows = data.split('\n').slice(1);
      const students = [];
      rows.forEach((row) => {
        const student = row.split(',');
        students.push(student);
      });
      const CS = [];
      const SWE = [];
      students.forEach((student) => {
        if (student[3] === 'CS') {
          CS.push(student[0]);
        } else if (student[3] === 'SWE') {
          SWE.push(student[0]);
        }
      });
      const totalNumberStudents = `Number of students: ${CS.length + SWE.length}\n`;
      const csStudents = `Number of students in CS: ${CS.length}. List: ${CS.join(', ')}\n`;
      const sweStudents = `Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`;
      const output = totalNumberStudents + csStudents + sweStudents;
      console.log(output);
      resolve(output);
    }
  });
});

module.exports = countStudents;
