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
        generation: 'i7'
    }
]

// filter
var filter_result = laptops.filter(function (item, index) {
    // console.log(item)
    // if(item.name == "acer" && item.generation=="i7"){
    //     return item;
    // }
    if(item.color == "red"){
        return true
    }
})
// console.log(filter_result)

// map
var laptop_names = laptops.map(function(item, index){
    return item.generation;
})
// console.log(laptop_names)

// every
var result = laptops.every(function (item, index) {
    // if (item.name == 'acer') {
    //     return true;
    // }

    // result false

    if(item.generation=="i7"){
        return true;
    }
})
// console.log(result)


// some
var check_acer = laptops.some(function(item, index){
    if(item.name="acer"){
        return true;
    }
})
// console.log(check_acer)

// find
var search_acer = laptops.find(function(item, index){
    if(item.name == "acer"){
        return true;
    }
})
// console.log(search_acer)

// reduce
laptops.reduce(function(accumulator, item, index, source){
    // console.log(accumulator)  
    console.log(source)
    return item;
}, 'hi')

