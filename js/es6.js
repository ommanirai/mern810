/*
es5
es6
ecma script


1. object shorthand
2. object destruct
3. default argument
4. template literals
5. arrow notation function
6. spread operator
7. rest operator
8. import and export

*/

// object shorthand
var name = "Ram"
var address = "Vedu"
var details = { name, address }
// console.log(details)


var det = {
    first_name: 'ram',
    add: 'vedu'
}

// object destruct
function displayDetails(details) {
    return details;
}

// var result = displayDetails(details)
// console.log(result.name)
// console.log(result.address)

var { first_name: firstName, add: location } = displayDetails(det)
// console.log(firstName)
// console.log(location)
// console.log(det)



// default argument
// function greetingText(msg="Namaste"){
//     console.log(msg, " welcome to vedu")
// }
// greetingText("Hi")


// template literals
// tild 
// concatinate operator(+ ,)
function greetingText(msg = "Namaste", address) {
    console.log(`${msg} welcome to ${address}
        asdf
        asdf
        asdf
        asdf`)
}
// greetingText("Hi", 'Lalitpur')



// arrow notation function
// es5
function welcome(name) {
    // console.log("hi")
    return name;
}

welcome()

// es6
// const welcomeMyBoy = (name, add) => {
//     // console.log("hello")
// }


// one liner arrow notation return funciton
const welcomeMyBoy = (name) => console.log("welcome my boy")
const welcomeMyBoys = (name) => {return name}
const welcomeMyBoyss = (name) => name;
welcomeMyBoy()



