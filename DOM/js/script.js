{ // This code is animated
// select element by query selector and change word
let bd = document.querySelector("#bd");
setTimeout(() => { bd.innerHTML = "Hello India";}, 2000);

//  Select element by id 
let ac = document.getElementById("bd");
setTimeout(() => { ac.innerHTML= "Hello Amarica"; }, 3000);

// Select element by class
let sa = document.getElementsByClassName("bd")[0];
setTimeout(() => { sa.innerHTML = "Hello Soudi Arab"; }, 4000);


// Select element by tag name 
let ru = document.getElementsByTagName("h2")[0];
setTimeout(() => { ru.innerHTML= "Bangladesh"; }, 5000);
}

// Change color by DOM
let world = document.querySelector("#world");
world.style = "color: red";

// Change Text By click event
world.addEventListener( 'click', () => {
    world.innerHTML = "Change Text";
})

// nodelist 
let li = document.querySelectorAll("li");
li.forEach((item => {
    console.log(item)
}))
