// loop with for of
var fruits=["mango",'apple',123, ,]
 for(var item of fruits){
     console.log("fruits",item);
 }
// item is not a keyword it is called as local reference
 var bikes=['pulsar','ns','r15']
 for(var item of bikes){
     console.log("Bikes",item);
 }
// to access object use for in loop
 var fruit1={
     fruit1:"apple",
     fruit2:'orange'
 }

 for(var key in fruit1){
    //  thie is template literal important feature in ES6 (useing backtick(`) can write templete literal)
     console.log(`key is ${key} value is ${fruit1[key]}`);
 }
//  for in can also access array
var bikes=['pulsar','ns160']
for(var index in bikes){
    // useing templete literal with help of  backtick
    console.log(`bikes in ${index}:${bikes[index]}`);
    // useing normal
    console.log(bikes[index]);
}
