let mixedArray = [
    'string', 
    42, 
    true, 
    null, 
    undefined,
    { name: 'object' },
    [1, 2, 3],
    function() { return 'I am a function'; }
];

console.log(mixedArray);
console.log(mixedArray[6][1]); // 2 (accessing nested array)
console.log(mixedArray[7]()); // "I am a function" (calling function element)