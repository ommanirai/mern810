var laptops = [
    {
        name: "acer",
        ram: '4gb',
        color: 'darkgrey',
        generation: 'i7'
    },
    {
        name: "dell",
        ram: '4gb',
        color: 'red',
        generation: 'i7'
    },
    {
        name: "acer",
        ram: '4gb',
        color: 'red',
        generation: 'i7'
    },
    {
        name: "dell",
        ram: '8gbgb',
        color: 'grey',
        generation: 'i7'
    },
    {
        name: "samsung",
        ram: '4gb',
        color: 'red',
        generation: 'i7'
    },
    {
        name: "samsung",
        ram: '16gb',
        color: 'white',
        generation: 'i7'
    },
    {
        name: "acer",
        ram: '4gb',
        color: 'red',
        generation: 'i9'
    }
]

// filter
// var filter_result = laptops.filter(function (item, index) {
//     // console.log(item)
//     // if(item.name == "acer" && item.generation=="i7"){
//     //     return item;
//     // }
//     if(item.color == "red"){
//         return true
//     }
// })
// console.log(filter_result)

// map
var laptop_names = laptops.map(function(item, index){
    return item.generation;
})
console.log(laptop_names)