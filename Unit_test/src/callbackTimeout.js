function delayedUpperCase(input, delay, callback) {
  setTimeout(() => {
    try {
      if (typeof input !== 'string') {
        throw new Error('Input must be a string');
      }
      if (input.length === 0) {
        throw new Error('Input cannot be empty');
      }
      callback(null, input.toUpperCase());
    } catch (err) {
      callback(err);
    }
  }, delay);
}

module.exports = { delayedUpperCase };