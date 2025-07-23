function multiplyNumbers(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      reject(new Error('Both arguments must be numbers'));
    } else {
      setTimeout(() => {
        resolve(a * b);
      }, 1000);
    }
  });
}

module.exports = { multiplyNumbers };