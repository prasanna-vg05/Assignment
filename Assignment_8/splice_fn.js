let fruits = ['apple', 'banana', 'cherry', 'date'];

// Remove elements
let removed = fruits.splice(1, 2); 
console.log( "Remove elements :",fruits); 
console.log("Remove elements : ",removed);

// Add elements
fruits.splice(1, 0, 'blueberry', 'cantaloupe');
console.log("Add elements :",fruits); 

// Replace elements
fruits.splice(2, 1, 'cherry');
console.log("Replace elements :",fruits); 