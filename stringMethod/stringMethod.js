let str="hello"
// toupperCase
let upperCase=str.toUpperCase();
console.log(`upperCase ${upperCase}`);
// toLowerCase
let toLowerCase=str.toLowerCase();
console.log(`toLowerCase ${toLowerCase}`);
// concat
let concat=str.concat(",world");
console.log(`concat ${concat}`);
// subString
let subString=str.substring(0,4);
console.log(`subString ${subString}`);
// substr
let substr=str.substr(0,4);
console.log(`subString ${substr}`);
// charAt
let charAt=str.charAt(4);
console.log(`charAt ${charAt}`);
// indexOf
let indexOf=str.indexOf("o");
console.log(`indexOf ${indexOf}`);
// replace
let replace=str.replace("h","H");
console.log(`replace ${replace}`);
// replaceAll
let replaceAll=str.replaceAll("h","H");
console.log(`replaceAll ${replaceAll}`);
// split
let split=str.split("");
console.log(`split ${split}`);
// exception string reverse question
let item="vijay-HI"
let stringReverse=item.split("-").reverse().join("-");
console.log(`stringReverse ${stringReverse}`);
// includes
let includes=str.includes("o");
console.log(`includes ${includes}`);
// trim 
let text="       ,welcome,        "
console.log(text);
let trim=text.trim();
console.log(trim);
// trimleft
let trimleft=text.trimLeft();
console.log(trimleft);
// trimRight
let trimRight=text.trimRight();
console.log(trimRight);
// can also use slice 
let text1="something"
let slice=text1.slice(1,4)
console.log("slice",slice);

