const fs = require('fs');

async function countStudents(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    if (!data) {
      return ('Cannot load the database');
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
    const a = `Number of students: ${CS.length + SWE.length}`;
    console.log(a);
    const b = `Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`;
    console.log(b);
    const c = `Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`;
    console.log(c);
    return (`${a}\n${b}\n${c}`);
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
