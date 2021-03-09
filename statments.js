// if else


// 6 am to 12pm --- good morning.
// 12 pm to 6 pm --- good aftrnoon
// after 6 pm  --- good evning.


let hour = 25;
if(hour>=6 && hour<12)
{
    console.log('Good Morning');
}
else if(hour>=12 && hour<18)
{
    console.log('Good afternoon');
}
else if(hour>=18 && hour<24)
{
    console.log('Good evening');
}
else
{
    console.log('please enter correct time');
}


// switch case

let roles = 'admin';
switch(roles)
{
    case 'guest':
        console.log('guest user');
    break;
    case 'admin':
        console.log('admin user');
    break;
    case 'vender':
        console.log('vender user');
    break;
    default :
        console.log('not an user');
    break;
}