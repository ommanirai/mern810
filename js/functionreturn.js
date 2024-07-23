// function welcome(name, address){
//     console.log("hi", name, 'welcome to ', address)
// }

// welcome('ram', 'vedu')
// welcome('shyam', 'ktm')
// welcome('hari', 'pkr')


function welcome(details){
    return details;
    // return address;
    // console.log("below return")
}

var d = {
    name:'ram',
    address:'ktm'
}

var r = ['shyam', 'ktm']

var result = welcome(d)
console.log("hi ", result.name)

var res = welcome(r)
console.log("hello ", res[0])