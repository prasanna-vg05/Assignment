// This is a separate Node.js file that fork() runs
// It can receive and send messages to the parent

process.on('message', (msg) => {
  console.log(`fork received: ${msg}`);
  process.send('Hello back from child!');
  process.exit(0);
});
