const fs = require('fs');

async function readDatabase(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    const rows = data.split('\n').slice(1);
    const individuals = [];
    rows.forEach((row) => {
      const individual = row.split(',');
      individuals.push(individual);
    });
    const CS = [];
    const SWE = [];
    individuals.forEach((field) => {
      if (field[3] === 'CS') {
        CS.push(field[0]);
      } else if (field[3] === 'SWE') {
        SWE.push(field[0]);
      }
    });
    const fields = { CS, SWE };
    return fields;
  } catch (error) {
    console.error('cannot read file');
    return Error('cannot read file');
  }
}

module.exports = readDatabase;
