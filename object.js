//  wirte a simple object 
let a = { id : 1, name: "Prince", phone : 1644557412};
console.log(a);

// remove a key form object 
delete(a.id);
console.log(a);

// add a key and value in object 
a.id= 2;
console.log(a);

// discturing object 
let x = {
    id : 1,
    name: "Prince",
    age : 21,
    } 

let {id, b, c} = x;
console.log(b);