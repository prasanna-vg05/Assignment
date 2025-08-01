# What is `promisify`?

> "It takes a function or callback and returns it as a promise."

`util.promisify` is a function from Node.js's `util` module that converts callback-based functions into Promise-based functions.

It allows you to use `await` with old Node.js-style functions (which follow the `(err, result)` callback pattern).

---

## Syntax

```javascript
const { promisify } = require('util');
```

---

## Example

### Callback Style (Old)

```javascript
const fs = require('fs');

fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) return console.error('Error:', err);
  console.log('File content:', data);
});
```

---

### Promisified Version

```javascript
const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

async function readFile() {
  try {
    const data = await readFileAsync('test.txt', 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFile();
```

---

## When to Use `promisify`

- When you're working with older Node.js core modules or libraries that still use callbacks.
- To modernize codebase to use