let person={
    fname :"vijay",
    lname :"k",
    address :{
        pincode :123456,
        city :"bangalore"
    }
}
// deep copy using json stringify
let stringifiedObject=JSON.stringify(person)
console.log("stringifiedObject",stringifiedObject);
// convert srting into js using parse
let personCopy=JSON.parse(stringifiedObject)
console.log("personCopy",personCopy);

person.address.pincode=134566;

console.log("personCopy",personCopy);
console.log("person",person);
