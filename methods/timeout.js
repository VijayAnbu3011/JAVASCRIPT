//setTimeout() & clearTimeout()

// The setTimeout() method calls a function after a number of milliseconds.
// 1 second = 1000 milliseconds.
// The setTimeout() is executed only once.

// To clear a timeout, use the id returned from setTimeout():
// myTimeout = setTimeout(function, milliseconds);
// Then you can to stop the execution by calling clearTimeout():

//example
console.log("setTimeout() & clearTimeout()");
const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
console.log("Happy Birthday!")
}
clearTimeout(myTimeout);

//setInterval() & clearInterval()

// The setInterval() method calls a function at specified intervals (in milliseconds).
// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
// 1 second = 1000 milliseconds.
// If you need repeated executions, use setInterval() instead.

// Use the clearTimeout() method to prevent the function from starting.

//example
console.log("setInterval and clearInterval");
const myInterval=setInterval(displayHello, 1000);

function displayHello() {
    console.log("Hello! ")
}
clearInterval(myInterval);









