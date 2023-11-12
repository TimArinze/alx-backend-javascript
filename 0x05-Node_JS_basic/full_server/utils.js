const fs = require('fs');

async function readDatabase(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    if (!data) {
      throw new Error('cannot read file');
    }
    const rows = data.split('\n').slice(1);
    const students = [];
    rows.forEach((row) => {
      const studentData = row.split(',');
      students.push(studentData);
    });
    const CS = [];
    const SWE = [];
    students.forEach((student) => {
      const [name, , , major] = student;
      if (major === 'CS') {
        CS.push(name);
      } else if (major === 'SWE') {
        SWE.push(name);
      }
    });
    const fields = { CS, SWE };
    return fields;
  } catch (error) {
    throw new Error('cannot read file');
  }
}

module.exports = readDatabase;
