const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(process.argv[2])
      const firstLine = 'This is the list of our students';
      const csStudents = `Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}`;
      const sweStudents = `Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`;
      res.status(200).send(`${firstLine}\n${csStudents}\n${sweStudents}`);
      } catch (error) {
        console.error(error)
        res.status(500).send('Cannot load the database');
      }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500);
      res.send('Major parameter must be CS or SWE');
      return res;
    }
    try {
      const data = await readDatabase(process.argv[2]);
      if (major === 'CS') {
        res.send(`List: ${data.CS.join(', ')}`);
      }
      if (major === 'SWE') {
        res.send(`List: ${data.SWE.join(', ')}`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
