//Dynamic objcts allow use to add or delete proprties from the objects.
const EmpDetails = {
    firstName : 'arvind',
    age : 25,
    details(){
        console.log('employee name is ' + this.firstName + ' ' + 'and age is ' + this.age);
    
    }
}

console.log(EmpDetails);