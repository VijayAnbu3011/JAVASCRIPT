// var
// var a=10
// var a=20
// console.log("a",a);
// for(var i=0;i<6;i++)
// {
//     console.log(i);
// }
// console.log(i);//there is no block scope in var so let and const introduced in ES6
// let and const are new feature add in ES6
// let
let b=10
// let b=20
// Uncaught SyntaxError: Identifier 'b' has already been declared (at scope.js:12:5) cant redeclare variable so
b=20
console.log("b",b);
for(let i=0;i<6;i++)
{
    console.log(i);
}
// console.log(i);//scope.js:21 Uncaught ReferenceError: i is not defined at scope.js:21:13 
// variable are in block scope
const c=10
// c=20//scope.js:24 Uncaught TypeError: Assignment to constant variable. can not redeclare variable and reasign value

