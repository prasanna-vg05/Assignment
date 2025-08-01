const util = require('util');

// 1. Callback-based Functions
function addCallback(a, b, callback) {
  callback(null, a + b);
}

function multiplyCallback(a, b, callback) {
  callback(null, a * b);
}

function useCallback(a, b) {
  addCallback(a, b, (err, sum) => {
    if (err) return console.error(err);
    multiplyCallback(sum, 10, (err, product) => {
      if (err) return console.error(err);
      console.log("Callback Result:", product);
    });
  });
}

// 2. Promise-based Functions
function addPromise(a, b) {
  return Promise.resolve(a + b);
}

function multiplyPromise(a, b) {
  return Promise.resolve(a * b);
}

function usePromise(a, b) {
  addPromise(a, b)
    .then(sum => multiplyPromise(sum, 10))
    .then(product => console.log("Promise Result:", product))
    .catch(console.error);
}

// 3. Async-Await-based Functions
async function addAsync(a, b) {
  return a + b;
}

async function multiplyAsync(a, b) {
  return a * b;
}

async function useAsyncAwait(a, b) {
  try {
    const sum = await addAsync(a, b);
    const product = await multiplyAsync(sum, 10);
    console.log("Async-Await Result:", product);
  } catch (err) {
    console.error(err);
  }
}

// 4. Promisified Callback-based Functions

const addPromisified = util.promisify(addCallback);
const multiplyPromisified = util.promisify(multiplyCallback);

function usePromisified(a, b) {
  addPromisified(a, b)
    .then(sum => multiplyPromisified(sum, 10))
    .then(product => console.log("Promisified Result:", product))
    .catch(console.error);
}



module.exports = {
  useCallback,
  usePromise,
  useAsyncAwait,
  usePromisified
};
