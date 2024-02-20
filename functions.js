// function diclaration
function hello(){
    console.log("hello");
}
hello();

// arrow function
let fun = () => { a = 10 + 10; console.log(a);}
fun();

// self excutive function or IIFE
(function (){
    console.log("hello")
})()

!function () {
    console.log("Code runs!");
  }();