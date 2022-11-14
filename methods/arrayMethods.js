//find()
console.log("find()");
console.log("==============Example:1=================");
 // Input array contain some elements.
 var array = [-10, -0.20, 0.30, -40, -50];
 
 // Method (return element > 0).
 var found = array.find(function (element) {
     return element > 0;
 });
 
 // Printing desired values.
 console.log(found);

  
console.log("==============Example:2=================");
// Input array contain some elements.
var array = [10, 20, 30, 40, 50];
 
// Method (return element > 10).
var found = array.find(function (element) {
    return element > 20 ;
});

// Printing desired values.
console.log(found);
console.log("==============Example:3=================");
 // Input array contain some elements.
 var array = [2, 7, 8, 9];
 
 // Provided testing method (return element > 4).
 var found = array.find(function (element) {
     return element > 4;
 });

 // Printing desired values.
 console.log(found);
console.log("==============Example:4=================");
let arrayfour = [2,1,0,5, 3, 1, 9];
 
// Provided testing method (return element > 4).
let found4 = arrayfour.find(function (element,index) {
     
    return element > 4&& index<2;
});
// Printing desired values.
console.log(found4);

console.log("==============Example:5=================");

let arr = [2,1,0,5, 3, 1, 9];
 
// Provided testing method 
let find = arrayfour.find(function (element,index) {
     
    return element%2==0&& index>2;
});
// Printing desired values.
console.log(find);

//findIndex()
console.log("findIndex()");
console.log("==============Example:1=================");
function isOdd(element) {
    return (element%2 == 1);
  }
  
  let ind=[4, 6, 7, 12].findIndex(isOdd); 
  console.log(ind);

console.log("==============Example:2=================");

function isOdd1(element) {
    return (element%2 == 1);
  }
  
  let ind1=[4, 6, 8, 12].findIndex(isOdd1); 

  console.log(ind1);
console.log("==============Example:3=================");
var array = [-10, -0.20,  -40, 0.30,-50];
 
 // Method (return element > 0).
 var found = array.findIndex(function (element) {
     return element > 0;
 });
 console.log(found);

console.log("==============Example:4=================");
let array4 = [2,5,0,6, 3, 1, 9];
 
// Provided testing method (return element > 4).
let foundind = array4.findIndex(function (element,index) {
     
    return element > 4&& index<2;
});
// Printing desired values.
console.log(foundind);
console.log("==============Example:5=================");
let array5 = [2,2,0,6, 3, 1, 9];
 
// Provided testing method (return element > 4).
let foundind2 = array5.findIndex(function (element,index) {
     
    return element > 4&& index<2;
});
// Printing desired values.
console.log(foundind2);
//flat()
console.log("flat()");
console.log("==============Example:1=================");
var arr5=['a','b',['c','d']]; //given 2D array  
var newArr=arr5.flat(); //using flat() method  
console.log("After flattening the array:  "+newArr); 
console.log("==============Example:2=================");
var arr6=[90,18,[89,56],[13,20,[67,17]]]; //given multidimensional array  
var newArr=arr6.flat(); //using flat() method  
console.log("After flattening the array:  ",newArr);  
console.log("==============Example:3=================");
var arr7=[90,18,[89,56],[13,20,[67,17]]]; //given multidimensional array  
var newArr=arr7.flat(); //using flat() method  
console.log("After flattening the array:  ",newArr);  
console.log("==============Example:4=================");
var arr8=['Orange','Pineapple','Grapes',['Potato','Tomato','Carrot',['Guava','Litchi']]]; //given a multidimensional array.  
var newArr=arr8.flat(Infinity); //setting depth value as infinity.  
console.log("After flattening the array:  ",newArr);   
console.log("==============Example:5=================");
var arr9=['John','Peter',,'Tomy',['Eni',,'Kerry']]; //given 2D array with holes in between.  
var newArr=arr9.flat(); //using flat() method.  
console.log("After flattening the array:  ",newArr);  
//sort()
console.log("sort()");
console.log("==============Example:1=================");

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

console.log("==============Example:2=================");

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);

console.log("==============Example:3=================");
const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
  // sort by value
  const sorted=items.sort(function (a, b) {
    return a.value - b.value;
  });
  console.log(sorted);
console.log("==============Example:4=================");
let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);

console.log("==============Example:5=================");
let mixedCaseAnimals = [
    'Cat', 'dog', 'Elephant', 'bee', 'ant'
];

mixedCaseAnimals.sort(function (a, b) {
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1;

});
console.log(mixedCaseAnimals);

//reverse()
console.log("reverse()");
console.log("==============Example:1=================");
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);
console.log("==============Example:2=================");
const items3 = [1, 2, 3];
console.log(items3); // [1, 2, 3]

items3.reverse();
console.log(items3);
console.log("==============Example:3=================");
var arr5=["AngulaJS","Node.js","JQuery"];  
var rev=arr5.reverse();  
console.log(rev);  
console.log("==============Example:4=================");
var arr8 = [0, 1, 2, 3].reverse();
        console.log("Reversed array is : " + arr8 ); 

console.log("==============Example:5=================");
var new_arr = [34, 234, 567, 4];
console.log(new_arr);
new_arr.reverse();
console.log(new_arr);