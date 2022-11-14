// // var fruits={
// //     fr1:'Apple',
// //     fr2:"orange",
// //     fr3:'Mango'
// // }

// // for(var item in fruits)
// // {
// //     console.log(`fruit name ${item}: ${fruits[item]}`);
// // }




// (function(){
//     console.log("hello");
// }())

// function sum(){
//     console.log("hello");
// }
// sum()

// var add=function(){
//     console.log("hello");
// }
// add()
//  var mul=()=>{
//      console.log("hello");
//  }
//  mul()

//  var add=(callback)=>{
//      let name="Vijay";
//      console.log("I am Developer");
//      callback(name)
//  }

//  var mul=(name)=>{
//      console.log(name+" got NEXON CAR");
//  } 
//   add(mul)

let text="Hello Vijay are you happy"

let text1=text.split(" ")
console.log(text1);
let slice1=text1.slice(1,2)
console.log(slice1);
let reverse1=slice1[0].split("").reverse().join("")
console.log(reverse1);
let splice1=text1.splice(1,1,reverse1)
let text1dp=text1.join(" ")
console.log(text1dp);