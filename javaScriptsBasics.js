/* data types in javaScripts
    1. primitive data types.
        --String
        --Number
        --Undefined
        --Null

*/

let name = 'Arvind';
let age = 25;
console.log(name + ' ' + age);

const range = 4;

console.log(range);

let s1 = 25;

//this is function
function squareRoot(number){
    let root = number * number;
    return root;
}
console.log(squareRoot(40));

//This is object
let user = {
    firstName: "tom",
    age: 25
};

console.log(user.firstName);

//This is array
let language = ['java','javaScripts','Ruby'];
console.log(language[2]);