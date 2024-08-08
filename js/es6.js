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

// welcome()

// es6
// const welcomeMyBoy = (name, add) => {
//     // console.log("hello")
// }


// one liner arrow notation return funciton
const welcomeMyBoy = (name) => console.log("welcome my boy")
const welcomeMyBoys = (name) => {return name}
const welcomeMyBoyss = (name) => name;
// welcomeMyBoy()


var laptops = [
    {
    name:'acer',
    ram:'4GB',
    color:'red'
},
{
    name:'dell',
    ram:'4GB',
    color:'red'
},
{
    name:'acer',
    ram:'8GB',
    color:'red'
},
{
    name:'acer',
    ram:'16GB',
    color:'red'
},
]
var ram16 = laptops.filter(function(item, index){
    if(item.ram == '16GB'){
        return true;
    }
})

var ram_16 = laptops.filter((item, index) => item.ram === "16GB")
// console.log(ram16)
// console.log(ram_16)


// spread and rest operator(...)
// spread
var a = {
    color:'red'
}
var b = {
    name:'acer'
}

var c = {
    // object concatinate
    // convert to immutable
    ...a,
    ...b,
    ram:'16GB'
}
a.generation = 'i7'
// console.log(c)
// console.log(a)
// console.log(b)




var d = {
    first_name: 'ram',
    add: 'vedu',
    last_name:"shrestha",
    email:'ram@gmail.com'
}

// rest
function display(details) {
    return details;
}
var { first_name, ...rest } = displayDetails(d)
// console.log("first name: ", first_name)
// console.log("rest is: ", rest)



// import and export
// file to file communication
var X = 23;
function Demo(){

}

// export
/*
two way of export:
1. named export

export function Demo(){

}

export function Demo1(){

}

export Data = x


2. default export
export default function Demo(){

}

export default X



// import
two way of import
1. if named export
import {Demo} from 'location_Of_file'
import {Demo, Demo1} from 'es6.js'


2. if default export
import something from 'location of file'
import DefaultData from 'es6.js'


3. if both named and default export
import {Demo, Demo1}, DefaultData from 'es6.js'


//  NOTE
=> THERE CAN BE MILTIPLE NAMED EXPORT WITHIN A SINGLE FILE
=> THERE CAN BE SINGLE DEFAULT EXPORT WITHIN A FILE
=> THERE CAN BE BOTH MULTIPLE NAMED EXPORT AND SINGLE DEFAUTL EXPORT WITHIN A FILE

*/