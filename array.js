// log simple array
let a = [10, 12, "prince", 'hello'];
console.log(a);

// get lenth by array
console.log(a.length);

// get just one value in array 
console.log(a[0]);

// get last value form array
console.log(a[a.length -1]);

// get all array value by loop
for(i = 0; i < a.length; i++){
    console.log(a[i]);
}

// /////  array method //////////
// push -> last in a value into array
let aPop = a.push("Bangladesh");
console.log(a);

// pop => last out on the array
aPop = a.pop();
console.log(a);

// unshift => frist in a value into array
aUnshift = a.unshift("Islam");
console.log(a);

// shift => frist out value on the array
aShift = a.shift();
console.log(a);