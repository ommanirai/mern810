var fruit = ['papaya', 'kiwi', 'apple', 'orange', 'kiwi', 'papaya']
var bikes = ['honda', 'yamaha', 'honda', 'yamaha']
var number = [1, 2, 3, 4, 5]
// sum of array numebr => result => 15
// filter odd number => [1,3,5]
// filter even number => [2,4]

// result
// var result = {
//     "papaya":2,
//     'kiwi':2,
//     "apple":1,
//     "orange":1
// }

function CountItem(array_name) {
    var countItem = {}
    array_name.forEach(function (item, index) {
        // papaya:1
        // papaya++
        // if (countItem[item] == undefined) {
        //     countItem[item] = 1
        // }
        // else {
        //     countItem[item]++
        // }


        if (countItem.hasOwnProperty(item) == true) {
            countItem[item]++
        }
        else {
            countItem[item] = 1
        }
    })

    // console.log(countItem)
    return countItem
}
var f = CountItem(fruit)
console.log(f)
var b = CountItem(bikes)
console.log(b)
var n = CountItem(number)
console.log(n)
