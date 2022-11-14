// Debouncing
// let count=0
// const getData=()=>{
//     console.log("Fetching Data",count++);
// }    
// let debounce=function(fn,d){
//     let timer
//     return function(){
//     let obj=this
//     arg=arguments;
//     clearTimeout(timer)
//     timer=setTimeout(()=>{
//         fn.call(obj,arg)
//     },d)    
// }
// }
// let betterFunction=debounce(getData,300)

// throtelling
// count=0
// let nothing=()=>{
//     console.log("Nothing",count++);
// }
// let throttle=function(fun,limit){
//     let flag=true
//     return function(){
//         if(flag){
//             fun.apply(this,arguments)
//             flag=false
//             setTimeout(()=>{
//                 flag=true
//             },limit)
//         }  
//     }
// }
// let noNothing=throttle(nothing,500)
// window.addEventListener("resize",noNothing)

// bubble sort
// let arr=[10,5,0,-2,100,0]
// function buble(arr){
//     for(var i=0;i<arr.length-1;i++)
//     {
//         for(var j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]) 
//             {
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     arr.reverse()
//     console.log(arr);
// }
// buble(arr)

// // reverse string
// let a="Hello Every One"
// console.log(a)
// let b=a.split(" ")
// console.log(b)
// let s=b.slice(1,2)
// console.log(s)
// let s1=s.toString().split("").reverse().join("")
// console.log(s1)
// let c=b.splice(1,1,s1)
// console.log(b)
// let c1=b.join(" ")
// console.log(c1)



// var str="Vijay"
// function reverse(str){
//     var a=""
//     var len=str.length-1
//     for(var i=len;i>=0;i--){
//         a+=str[i]
//     }
//     return a    
// }
// console.log(reverse(str));

// let name={
//     fName:"Vijay",
//     lName:"K"
// }

// let printFullName=function(s,ss,c){
//     console.log(this.fName+" "+this.lName);
// }

// printFullName.call(name,"Tiruppur","TamilNAdu")
// printFullName.apply(name,["Tiruppur","TamilNAdu"])

// let printMyName=printFullName.bind(name,"tiruppur","tn")

// printMyName("india")

// Function.prototype.mybind=function(...arg){
//     let obj=this
//     params=arg.slice(1)
//     console.log(params);
//     return function(...arg2){
//         obj.apply(arg[0],[...params,...arg2])
//     }
// }
// let printMyName2=printFullName.mybind(name,"tiruppur","tn")
// printMyName2("vijay")

// let arr=[1,2]

// let pf=printFullName.mybind(name)
// pf()

// let name={
//     fname:"vijay",
//     lname:"k",
//     address:{
//         pincode:12345
//     }
// }
// //  let name1=Object.assign({},name)
// let stringify=JSON.stringify(name)
// let name1=JSON.parse(stringify)
//  name1.fname="ponSuriya"
//  name1.address.pincode=98765

//  console.log("name1",name1);
//  console.log("name",name);

// (function(){
//     var a=b=3
//    })()

//   console.log("Is a undefined?"+(typeof a !=="undefined"))	 
//   console.log("Is b undefined?"+(typeof b !=="undefined"))


// function pustZeroToEnd(arr){
//     let count=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!=0){
//             arr[count++]=arr[i]
//         }
//     }
//     console.log(arr);   
//     while(count< arr.length)
//     arr[count++]=0
//     console.log(arr);
// }
// let arr=[2,5,8,0,2,0,3,0,4,0,5,0]
// pustZeroToEnd(arr)

// let arr=[1,2]
// let obj={
//     1:2
// }
// let fn=function(){
//     console.log("1");
// }
// fn()

let arr=[1,2,3,4,5,4,6,4,4,8]

let a=arr.filter((val,id)=>{
    return arr.indexOf(val) !== id
})
console.log(a)