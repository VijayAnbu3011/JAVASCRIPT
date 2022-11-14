let todaysDate=new Date()
console.log("todaysDate",todaysDate);
let futureDate=new Date(2023,0,14,12,08,35)
console.log("futureDate",futureDate);
let someDate=new Date("15 july 1996")
console.log("someDate",someDate);
// start from 1 jan 1970
let timeInMilli=new Date(86500000)
console.log("timeInMilli",timeInMilli);
console.log("year",todaysDate.getFullYear());
console.log("month",todaysDate.getMonth());
console.log("date",todaysDate.getDate());
console.log("hour",todaysDate.getHours());
console.log("minutes",todaysDate.getMinutes());
console.log("seconds",todaysDate.getSeconds());
console.log("day",todaysDate.getDay());

let daysInWeek=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

let todaysDay=daysInWeek[todaysDate.getDay()];

console.log("todaysDay",todaysDay);