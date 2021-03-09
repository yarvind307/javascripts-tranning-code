//Enumearting proprties of an object:
//get all the properties of an object:
//https://www.javascripttutorial.net/javascript-enumerable-properties/

const circle = {
    radius : 10,
    draw() 
    {
        console.log('area of circle is ');
    }
};



//1. for in loop

for (let key in circle)
{
    console.log(key, circle[key]);
    //console.log(circle[key]);
}


console.log('----------------');

//2. for of loop
for(let key of Object.keys(circle))
{
    console.log(key);
}

console.log('----------------');

for(let key of Object.entries(circle))
{
    console.log(key);
}


//3. in operator
//to check avalible proprites in the object.

if('draw' in circle)
{
    console.log('yes');
}