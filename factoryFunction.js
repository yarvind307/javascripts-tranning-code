// duplicate function crations.
// same type of the function is crated each time.
// https://www.javascripttutorial.net/javascript-factory-functions/
// factory function naming should be done in camel case.

function createCircle(radius)
{
    return
    {
        radius,
        draw()
        {
            console.log('draw');
        }
    }
}

const cc = createCircle(1);
console.log(cc); 


//Constructor function : also used to create objects.
// Name should be done in pascal notation. : OneTwoThree.


function Circle(radius)
{
    this.radius = radius;
    this.draw = function()
    {
        console.log('draw',radius);
    }
}

//how to call constructor function: use new keyword.

const aaa = new Circle(1);
console.log(aaa);
console.log(aaa.radius);
aaa.draw();

// my function
function FindCircle(radius1)
{
    this.radius1 = radius1;
    this.draw = function()
    {
        const area = 3*3.14*this.radius1;
        console.log('area of circle is ' + area);
        console.log('radius of circle is ' + this.radius1);
    }
}

const newArea = new FindCircle(23);
newArea.draw();
