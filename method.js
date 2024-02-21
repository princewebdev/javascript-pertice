let x = ["apple", "banana", "orange", "mango"];

// slice method 
console.log(x.slice(1,4));

// find method
let y = x.find((item) => {
    return item < "banana";
})
console.log(y)

// filter method 
let z = x.filter((item) => {
    return item > "banana";
})
console.log(z);