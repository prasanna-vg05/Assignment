const { exec, execFile, spawn, fork } = require('child_process');

// 1️ exec(): Run a shell command and get the output as a string (buffered)
console.log('\n[1] Using exec()');

exec('node -v', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec() error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`exec() stderr: ${stderr}`);
    return;
  }
  console.log(`exec() output: ${stdout}`);
});

// 2️ execFile(): Run a file directly without using the shell
console.log('\n[2] Using execFile()');

execFile('node', ['-v'], (error, stdout, stderr) => {
  if (error) {
    console.error(`execFile() error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`execFile() stderr: ${stderr}`);
    return;
  }
  console.log(`execFile() output: ${stdout}`);
});


// 3️ spawn(): Run a command and stream the output (useful for large data)

console.log('\n[3] Using spawn()');

const ls = spawn('ls', ['-l']);

ls.stdout.on('data', (data) => {
  console.log(`spawn() stdout:\n${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`spawn() stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`spawn() process exited with code ${code}`);
});


// 4️⃣ fork(): Start a new Node.js process that runs another .js file
//    Can communicate with messages (IPC)

console.log('\n[4] Using fork()');

const child = fork('./fork.js')

child.send('Hello from parent');

child.on('message', (msg) => {
  console.log(`fork() received from child: ${msg}`);
});

child.on('exit', (code) => {
  console.log(`fork() child process exited with code ${code}`);
});
