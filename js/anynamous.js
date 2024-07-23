// result
// function welcome(){}
welcome()

var result = function(){
    console.log("i am anynamous function")
}
// console.log("type of result: ", typeof(result))
result()

function welcome(){
    console.log("i am named function")
}
// hoisting => hoisting is a behaviour which moves all the declaration at top before execution

// iife
// syntax:
// ()()
// (welcome)()
(function(){
    console.log("i am anynamous funciton")
    console.log("i am taking help of IIFE to get execute")
})()