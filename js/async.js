/*
synchronous programming
step 1
step 2
step 3

step 2 waits result of step 1
step 3 waits result of step 2


asynchronous programming

*/
// console.log(1)
// console.log(2)

// callback
// setTimeout(function () {
//     console.log(3)
// }, 5000)
// console.log(4)

setInterval(function(){
    console.log('hello')
}, 2000)