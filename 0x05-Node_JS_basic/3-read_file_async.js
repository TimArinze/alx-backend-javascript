const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path)) {
      reject(Error('Cannot load the database'));
    }
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      }
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
      resolve(console.log(output));
    });
  });
}

module.exports = countStudents;
