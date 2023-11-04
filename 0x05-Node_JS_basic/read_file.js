const countStudents = (path) {
	fs.readFile(path, 'utf8', (err, data) => {
		if (err) {
			console.log("Cannot load the database")
		} else {
			console.log(`Number of student: ${NUMBER_OF_STUDENTS}`)
		}
	}
}
