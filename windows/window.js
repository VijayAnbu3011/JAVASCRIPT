// // get current location
// navigator.geolocation.getCurrentPosition((data)=>console.log(data))

// // directly can access window
// console.log("location",location);
// console.log("history",history);
// console.log("navigator",navigator);

// // alert 
// window.alert("hi");

// // confirm
// let isEligible=confirm("u r 18 plus")
// if(isEligible){
//     console.log("eligible to vote");
// }
// else{
//     console.log("not eligible to vote");
// }

// prompt
let age=prompt("Enter the age")
if (age>18){
    window.open("https://www.flipkart.com/");
}
else{
    window.open("https://www.firstcry.com/");
}