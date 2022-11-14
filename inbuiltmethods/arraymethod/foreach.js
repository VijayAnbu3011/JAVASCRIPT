// // iterate through array using for each method
// var fruits=["apple","orange"]
// fruits.forEach((value,index)=>{
//     return console.log(`${value}:${index}`);
// })
// console.log("====================================");
// // iterate through object inside array using for each method
// var books=[
//     {
//         title:'java',
//         price:500
//     },
//     {
//         title:'javaScript',
//         price:1500
//     },
//     {
//         title:'python',
//         price:5000
//     }
// ]
// books.forEach((value,index)=>{
//     console.log(value,index);
//     if(value.price>1000){
//         console.log(value.title);
//     }
// })
// console.log("======================================");
// // using map method
// fruits.map((value,index)=>{
//     return console.log(`fruit in index ${index}:is ${value}`);
// })
// // Array.isArray to check that array is array or not
// console.log(Array.isArray(fruits));
// to add in array push have used
var fruits1=["Apple","Orange"]
console.log("Fruits before push",fruits1);
var addFruit=fruits1.push("graphes")
console.log("Fruits after push",fruits1);
console.log(addFruit); 
// remove last fruits useing pop
var removeFruit=fruits1.pop()
console.log("fruits after pop",fruits1);
console.log(removeFruit);
// to check in array
var num=[10,20,30,40]
var hasTwenty=num.includes(20)
console.log("hasTwenty",hasTwenty);
// unshift add in first position in array
console.log("befor unshift",num);
var addNum=num.unshift(60)  
console.log("after unshift",num);
console.log(addNum);
// shift remove in first position in array
 var removeNum=num.shift()
 console.log("after shift",num);
 console.log(removeNum );
    // to remove middle element in array using splice
    var num1=[10,20,30,40]
    console.log("before splice",num1);
    var removeThirty=num1.splice(2,1,60)
    console.log("after splice",num1);
    console.log(removeThirty);
    // slice to cut element will not modify actual array
    var num2=[10,20,30,40,50]
    console.log("before slice",num2);
    var slicedElement=num2.slice(1,3)
    console.log("after slice",num2);
    console.log('slicedElement',slicedElement);
    // indexof to find element in which index is present
 var num3=[10,20,30,"Hello",40,50]
 console.log("num3",num3);
 var indexofHello=num3.indexOf("Hello")
 console.log("indexofHello",indexofHello);    
 num3.splice(indexofHello,1)
 console.log("num3",num3);
//  to find 30 in index
var num4=[10,20,30,40,30,40]
var numThirty=num4.indexOf(30)
console.log(numThirty);
if(numThirty!=-1)
console.log("30 is present");
else
console.log("30 is not present");
// joins
var num5=[10,20,30,40,50]
console.log("num5 :",num5);
var hifenNum=num5.join("&")
console.log("hifenNum",hifenNum);
// filter
var num6=[100,150,200,150,250,300]
var greaterThanOneFifty=num6.filter((val,ind)=>{
    return val>150
})  
console.log(greaterThanOneFifty);
var arr=['apple','mango','apple','orange','mango']
function removeDuplicate(arr){
    return arr.filter((item,index)=>{
        return arr.indexOf(item)=== index})
}
console.log(removeDuplicate(arr)); 