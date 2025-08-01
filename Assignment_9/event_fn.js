const readline = require('readline');

class KeyboardTracker {
  constructor() {
    this.active = false;
  }

  start() {
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(true);
    }
    
    readline.emitKeypressEvents(process.stdin);
    this.active = true;
    
    console.log('Keyboard tracking started (Press Ctrl+C to exit)...');
    
    process.stdin.on('keypress', (str, key) => {
      if (!this.active) return;
      
      if (key.ctrl && key.name === 'c') {
        this.stop();
        return;
      }
      
      console.log({
        key: key.name || str,
        ctrl: key.ctrl,
        shift: key.shift,
        timestamp: new Date().toISOString()
      });
    });
  }

  stop() {
    this.active = false;
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(false);
    }
    process.exit(0);
  }
}

// Instantiate and start the tracker
const tracker = new KeyboardTracker();
tracker.start();

// Clean exit on SIGINT
process.on('SIGINT', () => tracker.stop());