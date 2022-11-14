// // named function
// function sum(n1,n2){
//     return n1+n2
// }
// console.log(sum(10,20));
// // or next method
// // var s=sum(10,20)
// // console.log(s);
// // Anonymous function

// var divide =function(n1,n2){
//     return console.log(n1/n2);
// }
// divide(10,20);
// // IIFE(immediately invocked function expression or self invocked function)

// (function(n1,n2){
//     var product=n1*n2
//     console.log(`product ${product}`);
// }(10,20)
// );
// (function(n1,n2){
//     var sub=n1-n2
//     console.log(`Substract ${sub}`);
// }(10,20)
// );
// // arrow function
// // single line return is not needed
// var div=(n1,n2)=>n1/n2;
// console.log(div(10,20));
// var div=(n1,n2)=>{
//     return n1/n2;
// }
// console.log("div",div(10,20));
// // if only one parameter then parantheis is optional
// var greet=name=>{
//     return `${name},welcome to techno revolver`
// }
// console.log(greet(`vijay`));
// var greet1=(name,name2)=>{
//     return `${name+name2},welcome to techno revolver`
// }
// console.log(greet1(`vijay`,`kumar`));
// // no parameter - parantheis is mandatory
// var firstTenNumber=()=>{
//     for(var i=1;i<11;i++)
//     console.log(i);
// }
// firstTenNumber()
// // nested function or function currying
// var square=(n1)=>{
//     return (n2)=>{
//         console.log(`square of num : ${n2*n1}`);
//         return (n3)=>{
//             return console.log(`num is : ${n1*n2*n3}`);
//         }
//     }
// }
square(10)(20)(30)
// callback function
function test(callback){
    console.log('i m test');
    callback();
}
function sample(){
    console.log('i m sample');
}
test(sample)
// eg2
var userInput =(callback)=>{
    var name=prompt("Enter your name:")
    console.log("Entered name is :"+name);
    callback(name)
}
var displayuser=(name)=>{
    alert(`hello ${name}`)
}
userInput(displayuser)