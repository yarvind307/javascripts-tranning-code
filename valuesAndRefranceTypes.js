//value types: number. strings, boolean, symbols, undfined, null(perimitive)
//Reference type: Objcet, function,Array (non perimitive.)
//
//
//Values are copied by there values.
// Refernce are copid from there refernces.


//value type example.
let x = 10;
let y = x;
x = 20;

console.log(x);
console.log(y);

// reference type example.

let p = {value: 10};
let q = p;
p.value = 20;

console.log(p);
console.log(q);