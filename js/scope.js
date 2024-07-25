/*
application data:
variable
constant
function


scope
=> accessibility of application data
1. global scope
=> declare in outermost layer
=> accessible within a file

2. functional/local scope
=> declare within a funciton
=> accessible with a funcition
=> var maintain functional/local scope

3. block scope
=> declare within a block
=> accessible within a block
=> let maintain block scope

*/
// global scope
// console.log(name)
// var name = 'ram'
// function welcome(){
//     console.log(name)
// }
// welcome()
// console.log(name)


// functional scope
// var n = 100
// var a = 1
// function num(n){
//     a = 200
//     // a = 200
//     console.log(a)
//     console.log(n)
// }
// num(300)
// console.log(a)
// console.log(n)

// block scope
// {}
var text = "hi"
if(true){
    // var text = "hello"
    let text = "hello"
    console.log(text)
}
else{
    // var text = "bye"
    let text = "bye"
    console.log(text)
}
console.log(text)