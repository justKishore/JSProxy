const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
}

const handler = {
    
    get(target, property) {
        // console.log(target); // {firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com'}
        console.log(`Property ${property} has been read.`);
        return target[property];
    }
}


const proxyUser = new Proxy(user, handler);

console.log(proxyUser.firstName); // Property firstName has been read. John
console.log(proxyUser.lastName); // Property lastName has been read. Doe

console.log("user", user); // user {firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com'}
console.log("proxyUser", proxyUser); // proxyUser Proxy {firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com'}

proxyUser.lastName = "Khan";

console.log("user", user); // user {firstName: 'John', lastName: 'Khan', email: 'john.doe@example.com'}
console.log("proxyUser", proxyUser); // proxyUser Proxy {firstName: 'John', lastName: 'Khan', email: 'john.doe@example.com'}


console.log(user.lastName); // Khan
console.log(proxyUser.lastName); // Property lastName has been read. Khan

