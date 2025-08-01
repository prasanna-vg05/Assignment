function objectToJSON(obj) {
    return JSON.stringify(obj, null, 2);
}

let person = {
    name: 'John Doe',
    age: 30,
    isStudent: false,
    courses: ['Math', 'Science'],
    address: {
        street: '123 Main St',
        city: 'Anytown'
    }
};

console.log(objectToJSON(person));