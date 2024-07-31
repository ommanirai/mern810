/*
method
=> js inbuilt function

setTimeout()
setInterval()
clearInterval()
prompt()
Number()
typeof()

properties

*/
// string
var text = "Good Morning"
var fruits = 'apple, kiwi, papaya'
// console.log(text.length)
// console.log(text.toLowerCase())
// console.log(text.toUpperCase())
// // string to array
// console.log(fruits.split(','))

// number
var n = 100.246735
// console.log(n.toFixed(2))
// console.log(n.toFixed(0))

// boolen
// undefined
// null

// object
var details = {
    name:"Sujan",
    address:"Vedu",
    phone:'9823424234'
}
// console.log(Object.keys(details))
// console.log(Object.values(details))
console.log(details.hasOwnProperty('names'))

// for, while, do while
// object loop
// for in
for(var item in details){
    // console.log(item)
    // console.log(details[item])
    // console.log(details.item)
    console.log("value under key ",item, ':', details[item])
}


