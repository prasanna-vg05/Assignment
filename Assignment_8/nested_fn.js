function printNestedValues(obj, prefix = '') {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            printNestedValues(obj[key], `${prefix}${key}.`);
        } else {
            console.log(`${prefix}${key}: ${obj[key]}`);
        }
    }
}

let company = {
    name: 'Tech Corp',
    founded: 2005,
    departments: {
        engineering: {
            head: 'Alice',
            employees: 50
        },
        sales: {
            head: 'Bob',
            employees: 30,
            regions: {
                north: 15,
                south: 15
            }
        }
    }
};

printNestedValues(company);