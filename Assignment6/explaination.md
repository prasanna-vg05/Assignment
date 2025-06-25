# Sequential vs Asynchronous Execution: Python/C vs JavaScript

This document explains the differences between sequential (synchronous) execution in Python and C, and asynchronous (non-blocking) execution in JavaScript. Examples are provided for each to illustrate how code execution flows in these languages.

---

## Python and C: Sequential Execution

In Python and C, code execution is primarily **synchronous** and **blocking**. When a function or operation is called, the program waits for it to complete before moving to the next line.

### Example

```python
import time

def greet(name):
    print(f"Hello, {name}!")
    time.sleep(2) 
    print(f"Goodbye, {name}!")

print("Starting program...")
greet("Alice")
print("Program finished.")
```

#### Execution Flow

1. `"Starting program..."` is printed.
2. `greet("Alice")` is called.
3. `"Hello, Alice!"` is printed.
4. `time.sleep(2)` pauses the program for 2 seconds (blocking).
5. `"Goodbye, Alice!"` is printed.
6. `greet("Alice")` finishes.
7. `"Program finished."` is printed.

---

## JavaScript: Asynchronous and Non-Blocking Execution

JavaScript (in browsers or Node.js) is single-threaded but **asynchronous** and **non-blocking**. This is managed by the **Event Loop**. Long-running operations (like network requests, file I/O, or `setTimeout`) do not block the main thread. Instead, their callbacks are queued and executed when the main thread is free.

### Example

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
    setTimeout(() => { 
        console.log(`Goodbye, ${name}!`);
    }, 2000); 
}

console.log("Starting program...");
greet("Alice");
console.log("Program finished.");
```

#### Execution Flow

1. `"Starting program..."` is printed.
2. `greet("Alice")` is called.
3. `"Hello, Alice!"` is printed.
4. `setTimeout` schedules the callback to run after 2 seconds and immediately proceeds.
5. `"Program finished."` is printed.
6. After ~2 seconds, the callback runs and `"Goodbye, Alice!"` is printed.

---

