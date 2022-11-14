// primitive data type are immutable
let name="vijay"
let name1=name
console.log('name',name);
console.log('name1',name1);
name="suriya"
console.log("name",name);
console.log("name1",name1);
// reference data type are mutable
let car={
    name:"BMW",
    color:"white"
}
let car1=car
console.log("car",car);
console.log("car1",car1);
car.name="Audi"
console.log("car",car);
console.log("car1",car1);
// Object.assign to copy the object shallow copy
 car={
    name:"BMW",
    color:"white"
};
 car1=Object.assign({},car);
console.log("car",car);
console.log("car1",car1);
car1.name="Audi"
console.log("car",car);
console.log("car1",car1);
// array
// example for mutable
let arr=["apple","mango",'kiwi']
let arr1=arr
console.log("arr",arr);
console.log("arr1",arr1);
arr[0]="banana"
console.log("arr",arr);
console.log("arr1",arr1);
// example for immutable
console.log("====================");
let hobby=["dancing","bird watching","travelling","cooking"]
let hobby1=hobby.slice(0);
console.log("hobby",hobby);
console.log("hobby1",hobby1);
hobby.push("fishing");
console.log("hobby",hobby);
console.log("hobby1",hobby1);