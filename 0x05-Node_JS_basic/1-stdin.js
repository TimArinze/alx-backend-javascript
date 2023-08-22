// Using Process stdin

const message = 'Welcome to Holberton School, what is your name?\n';
process.stdout.write(message);

process.stdin.on('data', data => {
	const input = data.toString().trim()
	process.stdout.write(`Your name is: ${input}\n`)
})

process.stdin.on('end', () => {
	process.stdout.write('This important software is now closing\n')
});