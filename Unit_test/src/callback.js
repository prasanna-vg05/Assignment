function calculateWithCallback(a, b, callback) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    callback(new Error('Both inputs must be numbers'));
    return;
  }
  callback(null, a + b);
}

module.exports = { calculateWithCallback };



// AWS ID:771483591808

// Password: @Prasanna1234