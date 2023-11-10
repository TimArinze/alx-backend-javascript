const readDatabase = require('../utils');
const database = process.argv[2]

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(database)
      .then((data) => {
        const firstLine = 'This is the list of our students';
        const csStudents = `Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}`;
        const sweStudents = `Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`;
        res.status(200);
        res.send(`${firstLine}\n${csStudents}\n${sweStudents}`);
        return res;
      })
      .catch(() => {
        res.status(500);
        res.send('Cannot load the database');
        return res;
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500);
      res.send('Major parameter must be CS or SWE');
      return res;
    }
    readDatabase(database)
      .then((data) => {
        res.status(200);
        if (major === 'CS') {
          res.send(`List: ${data.CS.join(', ')}`);
        } else if (major === 'SWE') {
          res.send(`List: ${data.SWE.join(', ')}`);
        }
        return res;
      })
      .catch(() => {
        res.status(500);
        res.json({ Error: 'Cannot load the database' });
        return res;
      });
    return res;
  }
}

module.exports = StudentsController;
