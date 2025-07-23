const { multiplyNumbers } = require('./promise');

async function calculateProduct(a, b) {
  try {
    const result = await multiplyNumbers(a, b);
    return result;
  } catch (error) {
    throw new Error(`Calculation failed: ${error.message}`);
  }
}

module.exports = { calculateProduct };