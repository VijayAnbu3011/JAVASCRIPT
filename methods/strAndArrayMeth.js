let str="hello"
//1.toUpperCase
let upperCase=str.toUpperCase();
console.log(`upperCase -${upperCase}`); 
console.log(str);
//lowercase

let lowercase=str.toLowerCase();
console.log("lowercase",lowercase);

//concat
let concat=str.concat(",world")
console.log(`concat -${concat}`); 

//substring

let substring=str.substring(0,4)
console.log("substring",substring);

//substr
let substr=str.substr(0,4)
console.log("substr",substr);

//charAt

let charAt=str.charAt(4)
console.log("charAt",charAt);

//indexOf
let indexOf=str.indexOf("o")
console.log("indexOf",indexOf);

//replace
let replace=str.replace("h","H");
console.log("replace",replace)

//replaceAll
let replaceAll=str.replaceAll("l","L");
console.log("replaceAll",replaceAll)

//split
let split=str.split("");
console.log("split",split);

//includes
let includes=str.includes("0");
console.log("includes",includes)

//trim
let text="             welcome to Techno Elevate                  "
console.log(text);

let trim=text.trim()
console.log(trim);
let text1="            welcome to Techno Elevate                  "
console.log(text1);

let trimLeft=text.trimLeft()
console.log(trimLeft);
let trimRight=text.trimRight()
console.log(trimRight);

//slice
let text2="something"
let slice=text2.slice(1,3)
console.log("slice",slice);

//reverse a string
let reverse=text2.split("").reverse().join("")
console.log(reverse);

let text3="something is there"
let reverseWords=text3.split(" ").reverse().join(" ")
console.log(reverseWords);

var fruits=["mango","kiwi","lichi"]
fruits.forEach((value,index)=>{
    return console.log(`${index}:${value}`);
})
var books=[
    {
        title:"book1",
        price:50,
    },
    {
        title:"book2",
        price:500,
    },
    {
        title:"book3",
        price:5000,
    },
];
//forEach()
books.forEach((value,index)=>{
    //console.log(value,index);
    if(value.price>1000)
    {
        console.log(value.title);
    }
})
//map()
books.map((value,index)=>{
    return console.log(value,index);
})

fruits.map((val,idx)=>{
    return console.log(`fruit in index ${idx}:${val}`);
})
//Array.isArray to check if its an array or not => boolean
console.log(Array.isArray(fruits))

//push

var fruits2=["mango","banana","apple"]
console.log("fruits before push",fruits2);

var addFruit=fruits2.push("grapes","kiwi")
console.log("fruits after push",fruits2);
console.log(addFruit);
console.log("================================");

//remove last fruit
var removeFruit=fruits2.pop()
console.log("fruits after pop",fruits2);
console.log(removeFruit);
console.log("================================");

//includes -return type is boolean 
var num=[10,20,30,40];
var hasThirty=num.includes(30)
console.log(hasThirty);
console.log("================================");

//unshift
var number=[10,20,30,40];
console.log("before unshift",number);
var addNum=number.unshift(60)
console.log("after unshft",number);
console.log(addNum);
console.log("================================");

//shift
var removeFirst=number.shift()
console.log("removeFirst",removeFirst);
console.log("after shift",number);

console.log("================================");

//splice
var number1=[10,20,30,40];
console.log("before splice",number1);
var remove=number1.splice(2,1,60,80,"hello")
console.log("after splice",number1);
console.log("remove",remove);

console.log("================================");
 
//slice to copy the array and also get slice of array
var num2=[1,2,3,4,5,6,7]
console.log("before slice",num2);
var sliceElements=num2.slice(1,5)
console.log("after slice",num2);
console.log("sliced elements",sliceElements);
var sliceElements=num2.slice(0)
console.log("sliced elements",sliceElements);
var sliceElements=num2.slice(2  )
console.log("sliced elements",sliceElements);

console.log("================================");
//indexOf
var num2=[10,20,30,"hello",40,50]
console.log("num2",num2);
var indexOfHello=num2.indexOf("hello")
console.log("indexOfHello",indexOfHello);
num2.splice(indexOfHello,1)
console.log("num2",num2);
console.log("================================");
var num3=[10,20,30 ,40,50,60]
var indexOfThirty=num3.indexOf(30)
console.log(indexOfThirty);
if(indexOfThirty===-1){
    console.log("30 is not present");
}
else{
    console.log("30 is present");
}
console.log("================================");
//join
var num3=[10,20,30 ,40,50,60]
var hifeNum=num3.join("-");//separator inside ****join method returns string
console.log("hifeNum:",hifeNum);
console.log("================================");

//filter()
var numbers = [100, 150, 200, 250, 150,150,300]  
var usingFilter = () => {  
return unique = numbers.filter(function(item,index){  
      return numbers.indexOf(item) == index;  
   });  
}  
console.log(usingFilter()) 

var num4=[100,150,180,150,180,250,300,350]
console.log(num4);
var greaterThanOneFifty=num4.filter((value,index)=>{return value>150})
console.log(greaterThanOneFifty);
console.log("================================");
const n=[10,20,30]
const n1=n
var v=n.slice(0)
console.log(v);

