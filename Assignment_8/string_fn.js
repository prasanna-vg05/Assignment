// Method 1:
let sentence = "The quick brown fox jumps over the lazy dog. The fox is clever.";
let replaced = sentence.split('fox').join('cat');
console.log(replaced);

// Method 2:
let replaced2 = sentence.replace(/fox/g, 'cat');
console.log(replaced2);

// Method 3: 
let replaced3 = sentence.replaceAll('fox', 'cat');
console.log(replaced3);