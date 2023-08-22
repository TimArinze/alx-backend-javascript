const readline = require('readline');

const message = 'Welcome to Holberton School, what is your name?\n';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(message, (name) => {
  console.log(`Your name is: ${name}`);
});
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
