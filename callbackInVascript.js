

Introduction
// What is a Callback Function in JavaScript?

/* Function is first class citizen in js
When u pass a function within a function it is known as Callback
To do async things in js we use  callback with settimeout.
*/

setTimeout(function(){
    console.log("timeer");
}, 5000);

function x(y){
console.log("x");
y();
}

x(function y(){
    console.log("y");
});

// Advantages of Callback
// Callback  - dev tools  Demo in browser

/* Attaching handler to a click event is example of CallBack */
function closureClickEvent(){
    let count = 0;
    return function(){
    console.log("I am clicked", ++count);
    }
    
    }
    document.getElementById("clickMe").addEventListener('click', closureClickEvent());
    
// Blocking Main Thread in JavaScript
// Creating an Event Listeners in JavaScript
// Closures along with Event Listeners

// Garbage Collection & remove Event Listeners




