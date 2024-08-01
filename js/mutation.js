/*
mutation
1. mutable behaviour
=> if change in original it is reflected in reference
=> if change in reference it is reflected in original
=> non primitive data type(object and array) shows mutable behaviour

2. immutable behaviour
=> primitive data type(string, number, boolean) shows immutable behaviour

*/
// var obj1 = {
//     name: 'ram'
// }

// var obj2 = obj1

// obj1.address = "Vedu"
// obj2.status = 'active'

// console.log(obj1)
// console.log(obj2)

// var details = {
//     name: 'ram',
//     address: 'Vedu'
// }

// function displayDetails(det){
//     det.status = 'online'
//     console.log("within a function: ", det)
// }

// displayDetails(details)

// console.log("details outside the function: ", details)

var email1 = "demo@gmail.com"
var email2 = email1

email1 = "vedu@gmail.com"
email2 = "ommanirai27@gmail.com"
// console.log(email1)
// console.log(email2)

var email = 'random@gmail.com'
function msg(email) {
    email = "suhani@gmail.com"
    console.log(email)
}
msg(email)
console.log(email)




