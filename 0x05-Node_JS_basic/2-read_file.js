const fs = require('fs');

const countStudents = (path) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
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
      console.log(`Number of students: ${CS.length + SWE.length}`);
      console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
      console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
    }
  });
};

module.exports = countStudents;
