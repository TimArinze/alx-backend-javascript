// Using Process stdin
process.stdin.setEncoding('utf8');

// Handle input events
process.stdin.on('data', (data) => {
  //
  console.log('Welcome to Holberton School, what is your name?');
  const input = data.toString().trim();
  console.log(`Your name is: ${input}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
