// object destructureing
let person={
    fname:"vijay",
    lname:"k",
    address:{
        state:"goa",
        pincode:123456
    },
    hobbies:["singing","travelling","cooking"]
}
// destructure
let {fname,lname,address : {state,pincode},hobbies}=person;
console.log("fname",fname);
console.log("lname",lname);
console.log("state",state);
console.log("pincode",pincode);
console.log("hobbies",hobbies[1]);
let person1={
    fname:"Arun",
    lname:"k"
}
let{fname:firstName,lname:lastName}=person1;
 console.log("firstName",firstName);
//  destructureing array
let arr1=["singing","writing","travelling"];
let [hob1,hob2,hob3]=arr1;
console.log("hob1",hob1);
console.log("hob2",hob2);
console.log("hob3",hob3);