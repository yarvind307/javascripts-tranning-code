//Arithmtic
//assignment
//Ternary
//comparison
//logical
//binary


//Arithmtic oprations
let x = 10;
let y = 20;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x ** y); // to the power.

// ++ and -- is also here.
let a =1 ;
console.log(++a);
console.log( a);

let p =1;
console.log(p);
let q = p++;
console.log(p);
console.log(q);



//Assignment 
console.log("assigment");
let assi = 10;
assi *= 5;
console.log(assi);

//Comparison
let xx = 10;

    //Strict equality type and value
    console.log('Strict equality');
    console.log(1 === 1);
    console.log('1' === 1);
    console.log(true === 1);



    //lose equlaity only value.
    console.log('lose equlaity');
    console.log(1 == 1);
    console.log('1' == 1);
    console.log(true == 1);

    
//Ternary oprator.

let points = 90;
let type = points>100 ? 'gold' : 'silver';
console.log(type);


// logical
// AND ( &&):
//OR ( ||)
//NOT ( ! )

let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

let eligibleForLoan1 = highIncome || goodCreditScore;
console.log(eligibleForLoan1);

let userActive = true;
console.log( ! userActive);

// falsy values working.
 console.log('falsy values');
 console.log(false || 'arvind');
 console.log(true || 'arvind');

 console.log(false && 'arvind');
 console.log(true && 'arvind');



 //  bitwise oprator.
 // 1 = 00000001
 // 2 = 00000010
 // 3 = 00000011

 console.log(1 | 2);
 console.log(1 & 2);


 // Operator precedent.


 // swap two values.

let aa = 10;
let bb = 20;
let cc = aa;

    aa = bb;
    bb = cc;

console.log(aa);
console.log(bb);















