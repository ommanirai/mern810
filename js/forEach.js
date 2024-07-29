// forEach

var fruits = ['papaya', 'kiwi', 'apple', 'orange', 'kiwi', 'papaya']
// console.log(fruits[0])

// callback
// array_name.forEach(function(item, index){
// body of forEach
// })

// fruits.forEach(function(item, index){
//     console.log("index ", index, "item: ", item)
// })

// data => information => knowledge

var uniqueArray = []
fruits.forEach(function (item, index) {
    // if(uniqueArray.indexOf(item)==-1){
    //     uniqueArray.push(item)    
    // }

    // if(uniqueArray.includes(item)){

    // }
    // else{
    //     uniqueArray.push(item)    

    // }

    if (!uniqueArray.includes(item)) {
        uniqueArray.push(item)
    }
})
console.log(uniqueArray)


var uniqueNumber = []
var number = [1,2,3,4,5,23,4,3,4]
number.forEach(function(item, index){
    if(!uniqueNumber.includes(item)){
        uniqueArray.push(item)
    }
})

// uniqueItem(array_name)
// uniqueItem(number)
// uniqueItem(fruits)

// 1. function return
// 2. function with argument


var fruits = ['papaya', 'kiwi', 'apple', 'orange', 'kiwi', 'papaya']
// result
var result = {
    "papaya":2,
    'kiwi':2,
    "apple":1,
    "orange":1
}