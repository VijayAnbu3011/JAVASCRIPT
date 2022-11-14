// // spread operator only shallow copy
// let person={
//     fname:"vijay",
//     lname:"k"
// }
// let personcopy1={...person}
// console.log("personcopy1",personcopy1);
// // to merge two object
// let person1={
//     fname:"vijay",
//     lname:"k"
// }
// let address={
//     poncode:641687
// }
// let presentAddress={...person1,...address}
// console.log("presentAddress",presentAddress);
// // to merge two Array
// let arr1=[10,20,30]
// let arr2=[100,200,300]
// let arr12=[...arr1,...arr2]
// console.log("arr12",arr12);
// rest parameter
let sum=(...num)=>{
    let sum=0;
    for(i=0;i<num.length;i++){
        sum=sum+num[i]
        console.log(sum);
    }
    console.log(sum);
}
sum(10,20,30,50)