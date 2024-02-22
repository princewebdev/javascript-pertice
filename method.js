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

// set timeout method
setTimeout(()=>  console.log("hello time out"), 3000);

// set time interval like a loop
setInterval(() => console.log("hello time insterval"), 1000);