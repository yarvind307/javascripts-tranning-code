const circle = {
    radius : 1,
    draw(){
        console.log('draw');
    }
}


//1. for in loop.
const another = {};
console.log(another);
for (let key in circle)
another[key] = circle[key];
console.log(another);

// 2. using object.assign method:
const another1 = Object.assign({}, circle);
console.log(another1);

const another2 = Object.assign({
    color: 'red'}, circle);
console.log(another2);

console.log('--------------------------');
//3. using sprad operator.
const another3 = {...circle};
console.log(another3);
