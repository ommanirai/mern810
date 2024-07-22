/*
function:
function is reusable block of code which perform specific task
{}
syntax:
function function_name(){
body of function
}

function_name()

steps:
1. funcition declaration
2. function initialization
3. function call


function types:
1. named function
2. function with argument
syntax:
function function_name(parameter1, params2, params3,.....){
body of function
}


function_name(argument1, argument3, argument3,.....)


3. funciton with return type
4. anynamous/unnamed function
5. IIFE(immediately invoked functional expression)
*/

// named function
// function welcome() {
//     console.log("hi ram, welcome to vedu")
// }

// welcome()
// welcome()
// welcome()
// welcome()
// welcome()
// welcome()


// function welcome(name, address, email, phone, gender){
// function welcome(name, address){
//     // name is parameter
//     console.log("hi "+name+" welcome to "+address)
// }

// welcome(null,"vedu",'98234232', "ram@gmail.com", 'male')
// ram is argument
// welcome("shyam", "pkr")
// welcome("hari", 'bkt')

function welcome(details){
    console.log('what comes in details: ', details)
    console.log("name: ", details.name, "address: ", details.address)
}
var details = {
    address:"vedu",
    name:'rma',
    email:"ram@gmail.com",
    phone:"98234223432",
    gender:"male"
}

var d = []
welcome(details)