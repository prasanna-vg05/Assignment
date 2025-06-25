function greet(name) {
    console.log(`Hello, ${name}!`);
    setTimeout(() => { // Simulates a time-consuming operation (non-blocking)
        console.log(`Goodbye, ${name}!`);
    }, 2000); // 2000 milliseconds = 2 seconds
}

console.log("Starting program...");
greet("Alice");
console.log("Program finished.");