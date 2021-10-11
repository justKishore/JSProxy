// For custom logic in get()

const user = {
    firstName: 'John',
    lastName: 'Doe'
}

const handler = {
    // get(target, property) {
    //     // console.log(target); // {firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com'}
    //     console.log(`Property ${property} has been read.`);
    //     return target[property];
    // },
    // 2 get mean only secon get is working
    get(target, property) {
        return property === 'fullName' ?
            `${target.firstName} ${target.lastName}` :
            target[property];

        /**
         * OR
         * if (propety == 'fullname){
         * return `${target.firstName} ${target.lastName}`;
         * }
         * else{
         * return target[property];
         * }
         */
    }

   
};

const proxyUser = new Proxy(user, handler);

console.log(proxyUser.fullName);
