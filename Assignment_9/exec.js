const { exec } = require('child_process');

/**
 * Executes a Linux command and prints the output
 * @param {string} command - The Linux command to execute (e.g., 'ifconfig')
 */
function executeCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
      return;
    }
    console.log(`Command output:\n${stdout}`);
  });
}

executeCommand('ifconfig');
