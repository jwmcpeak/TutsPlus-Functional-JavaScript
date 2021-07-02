// function greet(salutation, firstName) {
//     return `${salutation} ${firstName}`;
// }

const greet = function(salutation) {
    return function(firstName) {
        return `${salutation} ${firstName}`;
    };
}

const howdy = greet('Howdy');
const hello = greet('Hello');


howdy('Jim');
howdy('Bob');
hello('Jim');
