
// for loop
for(let i=1; i<=10; i++)
{
    console.log(i);
        if(i%2 === 0)
        {
            console.log('even number');
        }
        else
        {
            console.log('odd number');
        }
}

// while loop
let i = 1;
while(i <=10)
{
    console.log(i);
    i++

}

// do while loop.
// it will run for atlast once.

let p = 1;
do 
{
    console.log(p);
    p++

}
while (p<=10);

////////////////////////////////////////////////
// for in loop.
let person = {
    name: 'naveen',
    age: 25,
    sex: 'male'
};

for(let key in person)
{
    console.log(key);
}

//Array
const xyz = ['my', 'you', 'yourself'];

for(let abc in xyz)
{
    console.log(abc, xyz[abc]);
}
//////////////////////////////////////////////

// For of loop
// is usded to get the values from the array.

const colure = ['my', 'you', 'yourself'];
for(let i of colure)
{
    console.log(i);
}

// brak and condition.
// use to break the loop time.

let k = 0
while(k<=10)
{
    if(k === 5)
    break;
console.log(k);
k++;
}