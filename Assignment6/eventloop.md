# Understanding the Event Loop (with Example)

The **event loop** is a core concept in JavaScript (especially in Node.js) that helps to achieve the asynchronous execution of the code

## How the Event Loop Works (Step by Step)

1. **Synchronous code runs first**  
   All regular code (not inside callbacks, promises, or timers) runs line by line.

2. **Microtasks queue**  
   After JavaScript checks the microtasks queue (mainly for resolved promises and `process.nextTick` in Node.js) and runs all microtasks before moving on.

3. **Timers phase**  
   Functions scheduled with `setTimeout` or `setInterval` are executed.

4. **Check phase**  
   Functions scheduled with `setImmediate` are executed.

5. **Repeat**  
   The event loop keeps cycling through these phases, handling new tasks as they come in.

---

## Example Walkthrough

Given this code:

```javascript

console.log('Script start'); 

Promise.resolve().then(() => {
  console.log('Promise 1 (microtask)');
});

setTimeout(() => {
  console.log('Timeout 1 (timer phase)');
  
  Promise.resolve().then(() => {
    console.log('Promise 2 (microtask in timer)');
  });
  
  setImmediate(() => {
    console.log('Immediate 2 (check phase in timer)');
    
    process.nextTick(() => {
      console.log('Next tick 3 (microtask in immediate)');
    });
  });
}, 0);
```

### What happens, step by step?

1. **Synchronous phase:**  
   - `console.log('Script start')` runs immediately.

2. **Microtasks queue:**  
   - The first `Promise.resolve().then(...)` is added to the microtasks queue.
   - After synchronous code, the microtasks queue runs:  
     - `console.log('Promise 1 (microtask)')`

3. **Timers phase:**  
   - `setTimeout(..., 0)` callback runs:  
     - `console.log('Timeout 1 (timer phase)')`
     - Inside this callback:
       - Another promise is resolved, so its `.then(...)` is added to the microtasks queue.
       - `setImmediate(...)` is scheduled for the check phase.

   - After the timer callback, the microtasks queue runs again:  
     - `console.log('Promise 2 (microtask in timer)')`

4. **Check phase:**  
   - `setImmediate(...)` callback runs:  
     - `console.log('Immediate 2 (check phase in timer)')`
     - Inside this callback:
       - `process.nextTick(...)` is scheduled (runs before other microtasks in Node.js).

   - After the immediate callback, `process.nextTick(...)` runs:  
     - `console.log('Next tick 3 (microtask in immediate)')`

---

## Expected Output Order

1. Script start
2. Promise 1 (microtask)
3. Timeout 1 (timer phase)
4. Promise 2 (microtask in timer)
5. Immediate 2 (check phase in timer)
6. Next tick 3 (microtask in immediate)

---

## Key Points

- **Synchronous code** always runs first.
- **Microtasks** (promises, `process.nextTick`) run after each phase, before moving on.
- **Timers** (`setTimeout`) and **immediates** (`setImmediate`) run in their own phases.
- Nesting tasks can schedule more microtasks or timers, which are handled in the next cycles.