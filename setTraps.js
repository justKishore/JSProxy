// Setting property
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20
}

console.log("User age: "+user.age); // User age: 20

const handler = {
    set(target, property, value) {
        console.log("Value :",value) // Value : 21
        if (property === 'age') {
            if (typeof value !== 'number') {
                throw new Error('Age must be a number.');
            }
            if (value < 18) {
                throw new Error('The user must be 18 or older.')
            }
        }
        target[property] = value;
    }
};

const proxyUser = new Proxy(user, handler);
// proxyUser.age = 'foo'; // Uncaught Error: Age must be a number.
// proxyUser.age = 16; // Uncaught Error: The user must be 18 or older.
proxyUser.age = 21;
console.log("Proxy user age: "+proxyUser.age); // Proxy user age: 21

console.log("User age: "+user.age); // User age: 21

